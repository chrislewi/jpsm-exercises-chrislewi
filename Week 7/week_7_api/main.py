import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from fastapi import FastAPI, Body
from pydantic import BaseModel

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

app = FastAPI(title="Translation API")

llm = ChatGoogleGenerativeAI(model="gemini-3.8-flash", api_key=GEMINI_API_KEY)

prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are a helpful assistant that translates {input_language} to {output_language}."
        ),
        (
            "human",
            "{input}"
        ),
    ]
)

chain = prompt | llm | StrOutputParser()

class TranslationRequest(BaseModel):
    input_language: str
    output_language: str
    text_input: str

class TranslationResponse(BaseModel):
    translated_text: str

@app.post("/translate", response_model=TranslationResponse)
def translate_text(request: TranslationRequest):
    ai_msg = chain.invoke({
        "input_language": request.input_language,
        "output_language": request.output_language,
        "input": request.text_input
    })
    
    return TranslationResponse(translated_text=ai_msg)