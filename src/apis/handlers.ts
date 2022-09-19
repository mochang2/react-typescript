import { rest, setupWorker } from 'msw'

// TODO: 인증이 추가되면 req.cookies 이용해서 error도 추가

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
            no: 1,
            category: '카테고리1',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 2,
            category: '카테고리2',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 3,
            category: '카테고리3카테고리3카테고리3',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 4,
            category: '카테고리1',
            title:
              '공지사항 제목입니다.공지사항 제목입니다.공지사항 제목입니다.공지사항 제목입니다.공지사항 제목입니다.공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 5,
            category: '카테고리2',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 6,
            category: '카테고리3카테고리3카테고리3',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 7,
            category: '카테고리1',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 8,
            category: '카테고리2',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 9,
            category: '카테고리3카테고리3카테고리3',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 10,
            category: '카테고리1',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 11,
            category: '카테고리11',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 12,
            category: '카테고리3카테고리3카테고리3',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 13,
            category: '카테고리1',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 14,
            category: '카테고리2',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 15,
            category: '카테고리3카테고리3카테고리3',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 16,
            category: '카테고리1',
            title:
              '공지사항 제목입니다.공지사항 제목입니다.공지사항 제목입니다.공지사항 제목입니다.공지사항 제목입니다.공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 17,
            category: '카테고리2',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 18,
            category: '카테고리3카테고리3카테고리3',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 19,
            category: '카테고리1',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 20,
            category: '카테고리2',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 21,
            category: '카테고리3카테고리3카테고리3',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 22,
            category: '카테고리1',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 23,
            category: '카테고리2',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          },
          {
            no: 24,
            category: '카테고리3카테고리3카테고리3',
            title: '공지사항 제목입니다.',
            createdAt: '2022-01-17 04:33:12',
            writer: 'Admin'
          }
        ]
      })
    )
  }),
  rest.delete('/api/faq', (req, res, ctx) => {
    console.log(req.body)
    return res(ctx.status(200), ctx.delay(100))
  }),
  rest.get('/api/faq/:id', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(100),
      ctx.json({
        faq: {
          no: 1,
          category: {
            id: 1,
            name: '카테고리1'
          },
          title:
            '게시글 상세보기의 제목입니다. 이거는 아무리 길어져도 ellipsis 처리하지 않습니다. 게시글 상세보기의 제목입니다. 이거는 아무리 길어져도 ellipsis 처리하지 않습니다. ',
          content:
            '게시글 상세보기의 내용입니다. 이것도 아무리 길어져도 ellipsis 처리하지 않습니다. 게시글 상세보기의 내용입니다. 이것도 아무리 길어져도 ellipsis 처리하지 않습니다.'
        }
      })
    )
  }),
  rest.delete('/api/faq/:id', (_, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100))
  }),
  rest.post('/api/faq', (_, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100))
  })
]

export default setupWorker(...handlers)
