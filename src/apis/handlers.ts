import { rest, setupWorker } from 'msw'

// TODO 인증이 추가되면 req.cookies 이용해서 error도 추가

const handlers = [
  rest.get('/api/faq/categories', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(100),
      ctx.json({
        categories: [
          {
            id: 1,
            name: '카테고리1'
          },
          {
            id: 2,
            name: '카테고리2'
          },
          {
            id: 3,
            name: '카테고리3카테고리3카테고리3카테고리3카테고리3'
          }
        ]
      })
    )
  }),
  rest.get('/api/faq', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(100),
      ctx.json({
        faqs: [
          {
            id: 1,
            category: '카테고리1',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            id: 2,
            category: '카테고리2',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            id: 3,
            category: '카테고리3카테고리3카테고리3',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            id: 4,
            category: '카테고리1',
            title:
              '공지사항 제목입니다.공지사항 제목입니다.공지사항 제목입니다.공지사항 제목입니다.공지사항 제목입니다.공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            id: 5,
            category: '카테고리2',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            id: 6,
            category: '카테고리3카테고리3카테고리3',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            id: 7,
            category: '카테고리1',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            id: 8,
            category: '카테고리2',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            id: 9,
            category: '카테고리3카테고리3카테고리3',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            id: 10,
            category: '카테고리1',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            id: 11,
            category: '카테고리2',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            id: 12,
            category: '카테고리3카테고리3카테고리3',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          }
        ]
      })
    )
  })
]

export default setupWorker(...handlers)
