import asyncio
from dotenv import load_dotenv
load_dotenv()
from browser_use import Agent
from langchain_openai import ChatOpenAI

async def main():
    agent = Agent(
        task="Acesse o site https://automationpratice.com.br e clique em login, digite usuario e senha joao@email.com e 123456," \
        "depois valide se foi logado com sucesso. Retorne para mim o codigo de automação em cypress.",
        llm=ChatOpenAI(model="gpt-4o"),
    )
    await agent.run()

asyncio.run(main())