import requests  # HTTP 요청을 보내기 위한 requests 라이브러리 불러오기
import os
from dotenv import load_dotenv
import gradio as gr
from __future__ import annotations
from collections.abc import Iterable
from gradio.themes.base import Base
from gradio.themes.utils import colors, fonts, sizes


class PokemonDex(Base):
    def __init__(
        self,
        *,
        primary_hue: colors.Color | str = colors.red,
        secondary_hue: colors.Color | str = colors.yellow,
        neutral_hue: colors.Color | str = colors.blue,
        spacing_size: sizes.Size | str = sizes.spacing_lg,
        radius_size: sizes.Size | str = sizes.radius_md,
        text_size: sizes.Size | str = sizes.text_md,
        font: fonts.Font | str | Iterable[fonts.Font | str] = (
            "ui-sans-serif",
            "system-ui",
            "sans-serif",
        ),
        font_mono: fonts.Font | str | Iterable[fonts.Font | str] = (
            "ui-monospace",
            "Consolas",
            "monospace",
        ),
    ):
        super().__init__(
            primary_hue=primary_hue,
            secondary_hue=secondary_hue,
            neutral_hue=neutral_hue,
            spacing_size=spacing_size,
            radius_size=radius_size,
            text_size=text_size,
            font=font,
            font_mono=font_mono,
        )
        self.name = "pokemon_dex"
        super().set(
            slider_color="*primary_400",
            background_fill_primary="*neutral_50",
            button_primary_background_fill="*primary_500",
            button_primary_text_color="*button_secondary_text_color",
            button_secondary_background_fill="*primary_400",
            button_primary_background_fill_hover="*button_primary_background_fill",
            button_secondary_background_fill_hover="*button_secondary_background_fill",
            button_primary_shadow_hover="0px 5px 0px 0px *primary_400;",
            button_primary_shadow="0px 3px 0px 0px *primary_400;",
            button_primary_shadow_active="0px 2px 0px 0px *primary_400;",
            button_secondary_shadow_hover="0px 5px 0px 0px *primary_300;",
            button_secondary_shadow="0px 3px 0px 0px *primary_300;",
            button_secondary_shadow_active="0px 2px 0px 0px *primary_300;",
            input_shadow="0px -1px 0px 0px *neutral_300;",
            input_shadow_focus="0px -1px 0px 0px *primary_300;",
            input_background_fill="*neutral_50",
            input_background_fill_focus="*primary_50",
            block_shadow="0px 3px 0px 0px *neutral_300;",
            checkbox_label_background_fill="*neutral_400",
            checkbox_label_background_fill_hover="*checkbox_label_background_fill",
            checkbox_label_background_fill_selected="*primary_700",
            checkbox_label_border_color_selected="*primary_500",
            checkbox_label_border_width="2px",
            slider_color_dark="*primary_500",
            button_primary_background_fill_dark="*primary_600",
            button_secondary_text_color_dark="*neutral_900",
            button_primary_text_color_dark="*button_secondary_text_color",
            button_secondary_background_fill_dark="*primary_500",
            button_primary_background_fill_hover_dark="*button_primary_background_fill",
            button_secondary_background_fill_hover_dark="*button_secondary_background_fill",
            button_primary_shadow_hover_dark="0px 5px 0px 0px *primary_700;",
            button_primary_shadow_dark="0px 3px 0px 0px *primary_700;",
            button_primary_shadow_active_dark="0px 2px 0px 0px *primary_700;",
            button_secondary_shadow_hover_dark="0px 5px 0px 0px *primary_600;",
            button_secondary_shadow_dark="0px 3px 0px 0px *primary_600;",
            button_secondary_shadow_active_dark="0px 2px 0px 0px *primary_600;",
            input_shadow_dark="0px -1px 0px 0px *neutral_700;",
            input_shadow_focus_dark="0px -1px 0px 0px *primary_600;",
            input_background_fill_dark="*neutral_900",
            input_background_fill_focus_dark="none",
            block_shadow_dark="0px 3px 0px 0px *neutral_700;",
            checkbox_label_background_fill_dark="*neutral_700",
            checkbox_label_background_fill_hover_dark="*checkbox_label_background_fill",
            checkbox_label_background_fill_selected_dark="*primary_500",
            checkbox_label_border_color_selected_dark="*primary_600",
            checkbox_label_text_color_selected_dark="*button_primary_text_color",
            checkbox_background_color_selected_dark="*primary_600",
            checkbox_background_color_dark="*neutral_400",
            checkbox_label_border_width_dark="2px",
            button_transform_hover="translateY(-2px);",
            button_transform_active="translateY(1px);",
            button_transition="all 0.1s;",
            button_border_width="0px",
            panel_border_width="1px",
            block_border_width="1px",
            block_border_color="*neutral_300",
            block_background_fill="*neutral_100",
            input_border_width="1px",
            block_label_shadow="none",
            checkbox_shadow="none",
        )

custom_css: str = """ 
    .gradio-container {
    background: url('https://pbs.twimg.com/media/EI511U5U0AE60x9?format=jpg&name=large');
    background-size: cover;
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .right-aligned {
        display: flex;
        justify-content: flex-end;
        align-items: center;

    .gradio-input, .gradio-output {
        border-radius: 10px;  /* 부드러운 모서리 */
        border: 1px solid rgba(255, 255, 255, 0.7);  /* 반투명한 테두리 */
        font-family: 'Pretendard', sans-serif;  /* Pretendard 폰트 적용 */
    }
    .gradio-chatbox {
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.5);  /* 채팅박스 테두리 반투명 */
        font-family: 'Pretendard', sans-serif;  /* Pretendard 폰트 적용 */
    }
    .gradio-textbox {
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.7);  /* 텍스트박스 테두리 반투명 */
        font-family: 'Pretendard SemiBold', sans-serif;  /* Pretendard 폰트 적용 */
        font-size: 22px;  /* 원하는 글씨 크기로 설정 */
    }
    .gradio-tab {
    background-color: #f5b300;  /* 탭의 배경색을 원하는 색으로 지정 */
    color: white;  /* 탭 텍스트 색상 */
    border-radius: 5px;  /* 탭 모서리를 둥글게 */
    }
    .gradio-tab-active {
        background-color: #ffcc00;  /* 활성화된 탭의 배경색 */
        color: black;  /* 활성화된 탭 텍스트 색상 */
    }
    .gradio-gallery {
    overflow-y: auto;
    max-height: 370px; /* 최대 높이 설정 */
    }
"""

# .env 파일 로드
load_dotenv()

# 환경 변수 가져오기
endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
api_key = os.getenv("AZURE_OPENAI_API_KEY")
ai_search_endpoint = os.getenv("AI_SEARCH_ENDPOINT")
ai_search_api_key = os.getenv("AI_SEARCH_API_KEY")
ai_search_index_name = os.getenv("AI_SEARCH_INDEX")
ai_search_semantic = os.getenv("AI_SEARCH_SEMANTIC")
system_content = os.getenv("SYSTEM_CONTENT")

def request_gpt(prompt):
    # 요청 헤더 설정
    headers = {
        "Content-Type": "application/json",  # 요청 본문을 JSON 형식으로 지정
        "api-key": api_key  # 인증을 위한 API 키 포함
    }

    # 요청 본문 (채팅 메시지 설정)
    body = {
        "messages": [
            {
                "role": "system",
                "content": system_content
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        "temperature": 0.7,  # 창의성 조절 (0: 보수적, 1: 창의적)
        "top_p": 0.9,  # 확률 분포 기반 단어 선택 (높을수록 다양한 단어 선택 가능)
        "max_tokens": 4096,
        "stop": None,  
        "stream": False,
        "data_sources": [
            {
                "type": "azure_search",
                "parameters": {
                    "endpoint": ai_search_endpoint,
                    "index_name": ai_search_index_name,
                    "semantic_configuration": ai_search_semantic,
                    "query_type": "semantic",
                    "fields_mapping": {},
                    "in_scope": True,
                    "filter": None,
                    "strictness": 2,
                    "top_n_documents": 8,
                    "authentication": {
                        "type": "api_key",
                        "key": ai_search_api_key
                    },
                    "key": ai_search_api_key,
                }
            }
        ],
    }

    # OpenAI API에 POST 요청을 보내고 응답을 받아옴
    response = requests.post(endpoint, headers=headers, json=body)
    if response.status_code == 200:
        response_json = response.json()  # 응답을 JSON 형식으로 변환

        # AI의 응답에서 채팅 메시지 추출
        message = response_json['choices'][0]['message']
        citation_list = message['context']['citations']

        role = message['role']
        content = message['content']
        
        # 참조된 부분에서 도감 번호 추출하여 포켓몬 이미지 URL 생성
        pokedex_numbers = []
        for c in citation_list:
            lines = c['content'].splitlines()
            doc_number = lines[-2]  # 도감 번호는 항상 -2 번째 줄에 있음
            print(f"추출된 도감 번호: {doc_number}")  # 도감 번호 확인을 위한 출력
            try:
                pokedex_number = int(doc_number)  # 도감 번호 추출
                pokedex_numbers.append(pokedex_number)
            except ValueError:
                continue  # 만약 도감 번호로 변환할 수 없는 값이 있으면 건너뛰기

        # 포켓몬 이미지 URL 생성
        image_urls = [get_pokemon_image(num) for num in pokedex_numbers]

        print(f"생성된 이미지 URL: {image_urls}")  # 생성된 이미지 URL 확인을 위한 출력

        return content, citation_list, image_urls
    else:
        return "", list(), []

# 테마를 사용할 때
theme = PokemonDex(
    primary_hue="yellow",        # 포켓몬의 빨간색
    secondary_hue="rose",   # 포켓몬의 노란색
    neutral_hue="orange",       # 포켓몬 도감의 다양성을 위한 파란색
)

# 도감 번호에 맞는 이미지 URL 생성 함수
def get_pokemon_image(pokedex_number):
    image_number = str(pokedex_number).zfill(4)  # 3자리로 만들어줌
    image_url = f"https://data1.pokemonkorea.co.kr/newdata/pokedex/new_full/{image_number}01.png"
    return image_url

################################ GRADIO 부분



def initial_message():
    return [{"role": "assistant", "content": "안녕? 난 한지우, 최고의 포켓몬 플레이어지! 궁금한 게 있으면 물어봐!"}]

def click_send(prompt, histories):
    print(prompt)
    content, citation_list, image_urls = request_gpt(prompt=prompt)
    message_list = [{"role": "user", "content": prompt}, {"role": "assistant", "content": content}]
    histories.extend(message_list)

    citation_list_format = ""
    for index, c in enumerate(citation_list, start=1):
        lines = c['content'].splitlines()
        citation_list_format += f"doc {index} : {lines[-1]} {lines[-2]}번 {lines[0]} {lines[1]}\n"

    return histories, citation_list_format.strip(), image_urls

def clear_function():
    # 초기화할 항목들
    return "", [], "", []  # 텍스트박스, 챗봇, 참조, 이미지 갤러리 초기화

with gr.Blocks(theme=theme, css=custom_css) as demo:

    gr.Markdown("""
        <div style="text-align:center;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/1200px-International_Pokémon_logo.svg.png" width="200" />
        </div>
    """)
    gr.Markdown("")

    with gr.Row():
        # 왼쪽에는 대화와 참조 탭
        with gr.Column(scale=3):
            with gr.Tabs():
                with gr.Tab("대화"):
                    chatbot = gr.Chatbot(value=initial_message(), label="한지우", type="messages", scale=6, height=450)
                with gr.Tab("참조"):
                    citation_display = gr.Textbox(label="참조", scale=6, lines=18)  # lines 속성으로 높이를 조정

        # 오른쪽에는 이미지 갤러리 탭
        with gr.Column(scale=2):
            gr.Markdown("")
            gr.Markdown("")
            gr.Markdown("")
            image_gallery = gr.Gallery(label="포켓몬 이미지 갤러리", value=[], scale=1, height=430, preview=True, min_width=200)

    with gr.Row():  # 전송 및 초기화 버튼을 오른쪽에 배치하기 위해 Row 사용
        prompt_textbox = gr.Textbox(label="질문하기", placeholder="궁금한 포켓몬을 말해줘!", scale=6, interactive=True)
        with gr.Column():  # 전송, 초기화 버튼을 세로로 정렬
            send_button = gr.Button("전송")
            clear_button = gr.Button("초기화")  # 초기화 버튼 아래로 이동

    # 클릭 및 엔터 이벤트 설정
    prompt_textbox.submit(click_send, inputs=[prompt_textbox, chatbot], outputs=[chatbot, citation_display, image_gallery])
    send_button.click(click_send, inputs=[prompt_textbox, chatbot], outputs=[chatbot, citation_display, image_gallery])

    # clear 버튼 클릭 시 초기화 동작
    clear_button.click(clear_function, outputs=[prompt_textbox, chatbot, citation_display, image_gallery])

demo.launch(share=True)