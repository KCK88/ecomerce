import * as QueryString from "node:querystring";

export type SearchParams = {
    params: string | QueryString.ParsedQs | (string | QueryString.ParsedQs)[]
}