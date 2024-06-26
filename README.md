# 프로젝트 소개
- 한 줄 소개: 간단한 API를 만들어보고 Swagger를 이용해 API 문서화를 한다.
- 배경: API를 만들어보는 일은 많이 해봤으나 API 문서화는 잘 하지 않아 이번 기회에 도전
- 참여 인원: 1명(개인 프로젝트)
- 역할: 상점을 모델링하여 API 설계 및 Swagger를 이용한 API 문서화
- 진행 기간: 약 3일

# 기술 스택
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white)
- ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

# api요청 기본 주소
- http://13.125.84.111

# 환경변수
- JWT_SECRET = JWT토큰 사인 키
- DATABASE_URL= 데이터베이스 URL

# API 명세서 URL
- http://13.125.84.111/api-docs

# ERD URL
- https://www.erdcloud.com/p/ccGQ9KmHhryMCg8NQ

# 프로젝트 회고
- Swagger를 통해 API문서를 만들어주는 도구가 있고 편리하긴 하지만 시간이 너무 오래 걸린다.
- NestJS 같은 경우는 API 코드만 잘 만들어두면 Swagger문서가 자동으로 완성된다고 한다. NestJS를 배우는 것이 도움이 될 것 같다.
- 그래도 API 문서가 보기 좋고 문제 없이 작동된다는 것을 확인했다.

# 더 고민해 보기

1. **암호화 방식**
- 비밀번호를 DB에 저장할 때 Hash를 이용했는데, Hash는 `단방향 암호화`와 `양방향 암호화` 중 어떤 암호화 방식에 해당할까요?
- 답: 단방향 암호화입니다.
- 비밀번호를 그냥 저장하지 않고 Hash 한 값을 저장 했을 때의 좋은 점은 무엇인가요?
- 답: 상대가 hash할때 쓴 값이 무엇인지 모르는 이상 데이터베이스의 비밀번호를 가져가도 실제 비밀번호를 알 수 없습니다.

2. **인증 방식**
- JWT(Json Web Token)을 이용해 인증 기능을 했는데, 만약 Access Token이 노출되었을 경우 발생할 수 있는 문제점은 무엇일까요?
- 답: JWT토큰이 만료되기까지 해당 토큰을 이용해서 해당 유저의 접근 권한을 얻을 수 있습니다.
- 해당 문제점을 보완하기 위한 방법으로는 어떤 것이 있을까요?
- 답: JWT토큰의 만료기한을 짧게 하거나 refreshToken을 이용하는 방법이 있습니다.
3. **인증과 인가**
- 인증과 인가가 무엇인지 각각 설명해 주세요.
- 답: 인증은 상대방이 어떤 사람인지 알려주는 것이고 인가는 상대방이 어떤 일을 하는 것을 허용하는 것입니다.
- 과제에서 구현한 Middleware는 인증에 해당하나요? 인가에 해당하나요? 그 이유도 알려주세요.
- 답: 인증입니다. Middleware를 통해 상대방이 누구인지 알려주는 토큰을 발행하는 것이지 어떠한 일을 허용한 것이 아니기 때문입니다.

4. **Http Status Code**
- 과제를 진행하면서 `사용한 Http Status Code`를 모두 나열하고, 각각이 `의미하는 것`과 `어떤 상황에 사용`했는지 작성해 주세요.
- 답: 저는 200번 코드와 400번 코드 그리고 500번 코드만 사용했습니다. 200번 코드는 올바르게 서버가 응답했을 때 400번 코드는 상대방이 잘못된 요청을 했을때 500번 코드는 서버가 요청 처리 중에 문제가 있을 때 이용하였습니다. 

5. **리팩토링**
- MongoDB, Mongoose를 이용해 구현되었던 코드를 MySQL, Sequelize로 변경하면서, 많은 코드 변경이 있었나요? 주로 어떤 코드에서 변경이 있었나요?
- 만약 이렇게 DB를 변경하는 경우가 또 발생했을 때, 코드 변경을 보다 쉽게 하려면 어떻게 코드를 작성하면 좋을 지 생각나는 방식이 있나요? 있다면 작성해 주세요.
- 답: 몽구스에만 유용하던 메서드들을 다 시퀄라이즈 메서드로 바꿔줘야 했습니다. 모델 정의의 경우 일부 바꿔야 했습니다. DB변경 시 코드가 변하는 것은 어쩔 수 없는 일입니다. 그러나 쉽게 변경하고 싶다면 DB와 연계해서 어떤 일을 하는 메서드들을 따로 분리해 저장해 놓으면 나중에 변경해야할 코드가 어떤 것인지 파악하기 쉽습니다. 


6. **서버 장애 복구**
- 현재는 PM2를 이용해 Express 서버의 구동이 종료 되었을 때에 Express 서버를 재실행 시켜 장애를 복구하고 있습니다. 만약 단순히 Express 서버가 종료 된 것이 아니라, AWS EC2 인스턴스(VM, 서버 컴퓨터)가 재시작 된다면, Express 서버는 재실행되지 않을 겁니다. AWS EC2 인스턴스가 재시작 된 후에도 자동으로 Express 서버를 실행할 수 있게 하려면 어떤 조치를 취해야 할까요?
(Hint: PM2에서 제공하는 기능 중 하나입니다.)
- 답: PM2는 기본적으로 서버가 비정상적으로 종료될 시 자동적으로 재시작합니다. 그냥 PM2를 이용해서 서버를 시작하면 됩니다.

7. **개발 환경**
- nodemon은 어떤 역할을 하는 패키지이며, 사용했을 때 어떤 점이 달라졌나요?
- 답: nodemon은 개발환경에서 변경점이 확인되면 바로 서버를 재시작해줍니다.
- npm을 이용해서 패키지를 설치하는 방법은 크게 일반, 글로벌(`--global, -g`), 개발용(`--save-dev, -D`)으로 3가지가 있습니다. 각각의 차이점을 설명하고, nodemon은 어떤 옵션으로 설치해야 될까요?
- 답: 일반적인 방법으로 설치한 패키지는 해당 프로젝트에서만 사용가능하지만 글로벌로 설치한 패키지는 어떤 프로젝트에서든지 사용할 수 있습니다. 개발용의 경우 개발 환경에서만 사용할 수 있고 배포시에는 해당 개발용 패키지들을 제외한 패키지들만 서버에 적용시킬 수 있습니다.
