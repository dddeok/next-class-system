This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn or yarn install

cd packages && cd main

yarn build && yarn start
or
yanr dev

```

- Products Page Nation 기능 구현 X
- 처음에는 동적 라우팅을 통해 데이터를 5개씩 Parsing 이후 데이터를 관리하려 했으나, 불필요하다고 느낀부분도 있음
- 서버에서 PageNation에 따른 데이터는 Object.Assign을 통해 중첩해서 데이터가 쌓이는 구조이나, 현재 Dummy Data를 받음으로써 처리하는 부분은 불필요함
- 추후 Page와 CountPerPage에 따른 API와 연동하여 Scoll PageLoading 이나 PageNation으로 구현은 충분히 가능하다고 생각함.
