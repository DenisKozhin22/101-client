export type TypeParamSlug = {
	slug?: string
	device?: string
}

export type TypeSearchParams = { [key: string]: string | string[] | undefined }

export interface IPageSlugParam {
	params: TypeParamSlug
	searchParams?: TypeSearchParams
}
