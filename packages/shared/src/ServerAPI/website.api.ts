import z from 'zod';

const GetWebsiteRequest = z.object({
  query: z.object({
    search: z.string().nonempty(),
  }),
});

type GetWebsiteRequestType = z.infer<typeof GetWebsiteRequest>['query'];

const CreateWebsiteRequest = z.object({
  body: z.object({
    url: z.string().nonempty(),
  }),
});

type CreateWebsiteRequestType = z.infer<typeof CreateWebsiteRequest>['body'];

const UpdateWebsiteRequest = z.object({
  body: z.object({
    id: z.number().nonoptional(),
    url: z.string().nonempty(),
  }),
});

type UpdateWebsiteRequestType = z.infer<typeof UpdateWebsiteRequest>['body'];

const DeleteWebsiteRequest = z.object({
  query: z.object({
    id: z.coerce.number(),
  }),
});

type DeleteWebsiteRequestType = z.infer<typeof DeleteWebsiteRequest>['query'];

export {
  GetWebsiteRequest,
  CreateWebsiteRequest,
  UpdateWebsiteRequest,
  DeleteWebsiteRequest,
};
export type {
  GetWebsiteRequestType,
  CreateWebsiteRequestType,
  UpdateWebsiteRequestType,
  DeleteWebsiteRequestType,
};
