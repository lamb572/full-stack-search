import { getCodeSandboxHost } from "@codesandbox/utils"

export function fetcher(input: string) {
  const codeSandboxHost = getCodeSandboxHost(3001)
  const API_URL = codeSandboxHost
    ? `https://${codeSandboxHost}`
    : "http://localhost:3001"

  const url = encodeURI(`${API_URL}${input}`)
  return fetch(url).then((res) => res.json())
}
