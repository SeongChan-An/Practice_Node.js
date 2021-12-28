# DB
데이터를 구조화하여 저장시켜 놓은 집합체

### SQL (Structured Query Language)
>**Query ?**  
DB를 관리하기 위한 명령을 하거나 원하는 정보를 요청하는 행위
schema : 어떠한 구조로, 어떤 제약조건으로 저장되어야 하는지 정의  

| 장점 | 단점 |
| ---- | ---- |
| 명확하게 정의 된 스키마 | 덜 유연함 |
| 데이터를 중복없이 저장| (스키마 수정 번거로움)|

## NoSQL (Not only SQL)
특징
- 스키마 없음
- 관계 없음
- JSON 형태 (key, value)

| 장점 | 단점 |
| ---- | ---- |
| 유연함 | 데이터 일관성 보장 X |
| 속도가 빠름 |  |

ex) 몽구스와 같은 툴을 통해 스키마를 재정의하면서 단점을 보완할 수 있다.

## MongoDB 
NoSQL의 대표적인 DB  
데이터의 형태 
Documnet(Data) 들이 모여 Collection 형태
- Document Oriented
- 스키마 제약 X
- Node.js 호환 좋음 (JSON 형태)

환경설정
[MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?https://www.mongodb.com/cloud/atlas/lp/try2-aterms&utm_source=google&utm_campaign=gs_apac_south_korea_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624365&adgroup=115749706543&gclid=Cj0KCQiA5aWOBhDMARIsAIXLlkfA5VyLpHpXa5teuVmEK6iYvUk2jhVVX74PsLQoabEv36Qj0OcqAY4aAjDmEALw_wcB)  
접속하여 계정 가입 및 프로젝트 생성 (무료 환경 세팅)

생성된 프로젝트에서 Connect > Allow Access From Anywhere(개발단계) > MongoDB Compass 를 이용하여 연결 > project 생성하고 data 관리

## Mongoose
> **Mongo DB ODM(Object Documnet Mapping)**  
Documnet를 조회할 때 자바스크립트 Object로 바꿔주는 역할

설치 
> npm install mongoose


### Mongoose schema
schema를 재작성하는 이유 ?  
데이터의 일관성이 부족하여 중복 위험이 있어 mongoose에서는 schema를 지원함



