import { getCodeSandboxHost } from "@codesandbox/utils"
import useSWRMutation from "swr/mutation"
import { GetSearchResultsParams, SearchResults } from "./types"

async function getSearchResults(
  url: string,
  { arg }: { arg: GetSearchResultsParams }
) {
  const codeSandboxHost = getCodeSandboxHost(3001)
  const API_URL = codeSandboxHost
    ? `https://${codeSandboxHost}`
    : "http://localhost:3001"

  const encodeURL = encodeURI(`${API_URL}${url}?filter=${arg.filter}`)

  return fetch(encodeURL, {
    method: "GET",
  }).then((res) => res.json())
}

export function useSearch() {
  const { data, error, isMutating, reset, trigger } = useSWRMutation<
    SearchResults,
    Error,
    string,
    GetSearchResultsParams
  >(`/search`, getSearchResults)

  return {
    searchResults: data,
    isLoading: isMutating,
    isError: error,
    trigger,
    reset,
  }
}
