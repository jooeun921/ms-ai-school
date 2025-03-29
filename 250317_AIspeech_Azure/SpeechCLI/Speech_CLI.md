### Azure의 Speech을 활용한 Speech CLI 활용법

## 1. 필수 설치 항목

### ✅ Microsoft Visual C++ 재배포 가능 패키지 설치

- **[다운로드 링크](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-microsoft-visual-c-redistributable-version)**
- 처음 설치하는 경우 **재시작이 필요할 수 있음**.

### ✅ .NET 6 설치

- **[다운로드 링크](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)**
- 반드시 **.NET 6 버전**을 설치해야 함 (**다른 버전 지원 X**).

---

## 2. Speech CLI 설치 및 업데이트

### 📌 Speech CLI 설치

````sh
dotnet tool install --global Microsoft.CognitiveServices.Speech.CLI

### 📌 Speech CLI 업데이트
```sh
dotnet tool update --global Microsoft.CognitiveServices.Speech.CLI

---

## 3. Azure Speech 리소스 설정
### 🔑 Speech 리소스 키 및 지역 설정
Speech CLI를 사용하려면 **Azure Speech 리소스 키**와 **지역(region) 식별자**(예: `eastus`, `westus`)가 필요합니다.
Azure Portal에서 음성 리소스를 생성한 후, 아래 명령어를 실행하여 키와 지역을 설정합니다.

```sh
spx config @key --set SPEECH-KEY
spx config @region --set SPEECH-REGION

---

## 4. Speech CLI 활용법
### 🎙️ 음성 인식 (Recognize)
음성을 텍스트로 변환하는 기능으로, 마이크(--microphone), 로컬 파일(--file), URL(--url)을 입력으로 사용 가능합니다.
변환된 텍스트는 .txt, .json, .xml 등 다양하게 저장할 수 있으나, --format detailed을 사용해, --output result.json 으로 저장하면 더 많은 정보가 담긴 파일로 저장이 된다.

#### 🔹 마이크 입력으로 음성 인식
> ⚠️ 한글 음성 인식을 원할 경우 --language ko-kr 옵션을 추가해야 합니다.
```sh
spx recognize --language ko-kr --microphone
#### 🔹 로컬 오디오 파일 변환
```sh
spx recognize --file <파일경로>
#### 🔹 URL을 통한 음성 인식
```sh
spx recognize --url <오디오 파일 URL>

> ⚠️ 저장 관련해서
🔹 Per event output (이벤트별 출력): 이벤트가 발생할 때마다 지정된 항목들이 출력됩니다. 예를 들어, 텍스트, 세션 ID 등을 실시간으로 얻을 수 있습니다.
```sh
spx recognize --file audio1.wav --language ko-kr --output each event --output all text --output all sessionid
🔹 Combined output (결합된 출력): 모든 항목들이 하나의 오디오 스트림에 대해 누적되어 출력됩니다. 하나의 파일 내에서 여러 항목들을 동시에 다루기 적합합니다.
```sh
spx recognize --once --output each event --output all sessionid --output each text
🔹 Batch output (배치 출력):배치 작업을 통해 여러 오디오 파일을 처리하고 결과를 일괄적으로 저장합니다. 이 경우 인식 결과가 서비스에서 정의한 발화 경계에 맞게 나뉘어 출력됩니다.
```sh
spx recognize --once --output batch json --output batch file my.output.json


### 🔊 음성 합성 (Synthesize)
입력된 텍스트를 음성으로 변환하는 기능입니다.
특정 음성(--voice ko-KR-YuJinNeural)을 선택하여 음성을 합성할 수 있습니다.
변환된 음성을 파일로 저장(--audio output <파일명>)할 수 있습니다.

#### 🔹 입력된 텍스트를 음성으로 변환 (음성 파일 저장 가능)
```sh
spx synthesize --text "안녕? 반가워!! 너 오늘 컨디션은 어때?" --speakers --voice ko-KR-YuJinNeural --audio output hello-sample.wav
#### 🔹 인터랙티브 모드로 실시간 입력 변환
```sh
spx synthesize --interactive --speakers --voice ko-KR-YuJinNeural

• 적용할 수 있는 한글 음성 정보
ko-KR-SunHiNeural(여성)
ko-KR-InJoonNeural(남성)
ko-KR-HyunsuMultilingualNeural 4(남성)
ko-KR-BongJinNeural(남성)
ko-KR-GookMinNeural(남성)
ko-KR-HyunsuNeural(남성)
ko-KR-JiMinNeural(여성)
ko-KR-SeoHyeonNeural(여성)
ko-KR-SoonBokNeural(여성)
ko-KR-YuJinNeural(여성)


### 📔 음성 번역 (translate)
source(입력되는 음성의 언어)를 target(번역되기를 원하는 언어)로 번역합니다.
```sh
spx translate --microphone --source ko-kr --target ja-jp
여러 언어로 번역하는 경우 언어 코드를 세미콜론(;)으로 구분합니다.
```sh
spx translate --microphone --source en-US --target 'ru-RU;fr-FR;es-ES'

저장 형식은 .txt, .json, .xml 등 다양함.
```sh
spx translate --file /some/file/path/input.wav --source en-US --target ru-RU --output file <저장하고 싶은 파일경로 및 이름>.txt

---

## 📌 --format detailed 옵션이 추가하는 정보(recognize에서 활용하는 기능.)
### ✅ 일반 모드 (--format simple 또는 기본값)
🔹 변환된 텍스트만 출력됨.
```sh
{
  "RecognitionStatus": "Success",
  "DisplayText": "안녕하세요. 반갑습니다."
}
### ✅ --format detailed 사용 시 추가되는 정보
🔹 텍스트 신뢰도(Confidence)
🔹 단어별 타임스탬프(StartTime, Duration)
🔹 음성 언어(Language), 음성 속도(SpeakingRate) 등
```sh
{
  "RecognitionStatus": "Success",
  "Offset": 5000000,
  "Duration": 10000000,
  "NBest": [
    {
      "Confidence": 0.98,
      "Lexical": "안녕하세요 반갑습니다",
      "ITN": "안녕하세요. 반갑습니다.",
      "MaskedITN": "안녕하세요. 반갑습니다.",
      "Display": "안녕하세요. 반갑습니다.",
      "Words": [
        {
          "Word": "안녕하세요",
          "Offset": 5000000,
          "Duration": 3000000,
          "Confidence": 0.98
        },
        {
          "Word": "반갑습니다",
          "Offset": 8000000,
          "Duration": 2000000,
          "Confidence": 0.97
        }
      ]
    }
  ]
}
### 🛠️ --format detailed 주요 특징
🔹 Confidence (신뢰도) → 변환된 텍스트의 정확도를 나타내는 확률 값
🔹 Words 배열 → 각 단어별 타임스탬프(시작 시간, 지속 시간) 포함
🔹 ITN / MaskedITN / Display → 변환된 텍스트의 다양한 포맷 제공
🔹 ITN: 숫자 그대로 (예: "일천오백" → "1500")
🔹 MaskedITN: 민감한 정보 마스킹 적용
🔹 Display: 최종적으로 출력할 자연스러운 텍스트
````
