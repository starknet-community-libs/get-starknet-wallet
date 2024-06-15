export type WalletProvider = {
  id: string
  name: string
  icon: string
  downloads:
    | { chrome?: `https://chrome.google.com/webstore/detail/${string}` }
    | { firefox?: `https://addons.mozilla.org/en-US/firefox/addon/${string}` }
    | { edge?: `https://microsoftedge.microsoft.com/addons/detail/${string}` }
    | { safari?: `https://apps.apple.com/us/app/${string}` }
}

const wallets: WalletProvider[] = [
  {
    id: "argentX",
    name: "Argent X",
    icon: "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgNDAgMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNC43NTgyIC0zLjk3MzY0ZS0wN0gxNC42MjM4QzE0LjI4NTEgLTMuOTczNjRlLTA3IDE0LjAxMzggMC4yODExNzggMTQuMDA2NCAwLjYzMDY4M0MxMy44MDE3IDEwLjQ1NDkgOC44MjIzNCAxOS43NzkyIDAuMjUxODkzIDI2LjM4MzdDLTAuMDIwMjA0NiAyNi41OTMzIC0wLjA4MjE5NDYgMjYuOTg3MiAwLjExNjczNCAyNy4yNzA5TDYuMDQ2MjMgMzUuNzM0QzYuMjQ3OTYgMzYuMDIyIDYuNjQwOTkgMzYuMDg3IDYuOTE3NjYgMzUuODc1NEMxMi4yNzY1IDMxLjc3MjggMTYuNTg2OSAyNi44MjM2IDE5LjY5MSAyMS4zMzhDMjIuNzk1MSAyNi44MjM2IDI3LjEwNTcgMzEuNzcyOCAzMi40NjQ2IDM1Ljg3NTRDMzIuNzQxIDM2LjA4NyAzMy4xMzQxIDM2LjAyMiAzMy4zMzYxIDM1LjczNEwzOS4yNjU2IDI3LjI3MDlDMzkuNDY0MiAyNi45ODcyIDM5LjQwMjIgMjYuNTkzMyAzOS4xMzA0IDI2LjM4MzdDMzAuNTU5NyAxOS43NzkyIDI1LjU4MDQgMTAuNDU0OSAyNS4zNzU5IDAuNjMwNjgzQzI1LjM2ODUgMC4yODExNzggMjUuMDk2OSAtMy45NzM2NGUtMDcgMjQuNzU4MiAtMy45NzM2NGUtMDdaIiBmaWxsPSIjRkY4NzVCIi8+Cjwvc3ZnPgo=",
    downloads: {
      chrome:
        "https://chrome.google.com/webstore/detail/argent-x-starknet-wallet/dlcobpjiigpikoobohmabehhmhfoodbb",
      firefox: "https://addons.mozilla.org/en-US/firefox/addon/argent-x",
      edge: "https://microsoftedge.microsoft.com/addons/detail/argent-x/ajcicjlkibolbeaaagejfhnofogocgcj",
    },
  },
  {
    id: "braavos",
    name: "Braavos",
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aAogICAgICAgIGQ9Ik02Mi43MDUgMTMuOTExNkM2Mi44MzU5IDE0LjEzMzMgNjIuNjYyMSAxNC40MDcgNjIuNDAzOSAxNC40MDdDNTcuMTgwNyAxNC40MDcgNTIuOTM0OCAxOC41NDI3IDUyLjgzNTEgMjMuNjgxN0M1MS4wNDY1IDIzLjM0NzcgNDkuMTkzMyAyMy4zMjI2IDQ3LjM2MjYgMjMuNjMxMUM0Ny4yMzYxIDE4LjUxNTYgNDMuMDAwOSAxNC40MDcgMzcuNzk0OCAxNC40MDdDMzcuNTM2NSAxNC40MDcgMzcuMzYyNSAxNC4xMzMxIDM3LjQ5MzUgMTMuOTExMkM0MC4wMjE3IDkuNjI4MDkgNDQuNzIwNCA2Ljc1IDUwLjA5OTEgNi43NUM1NS40NzgxIDYuNzUgNjAuMTc2OSA5LjYyODI2IDYyLjcwNSAxMy45MTE2WiIKICAgICAgICBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzcyXzQwMjU5KSIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTc4Ljc2MDYgNDUuODcxOEM4MC4yNzI1IDQ2LjMyOTcgODEuNzAyNSA0NS4wMDU1IDgxLjE3MTQgNDMuNTIyMkM3Ni40MTM3IDMwLjIzMzQgNjEuMzkxMSAyNC44MDM5IDUwLjAyNzcgMjQuODAzOUMzOC42NDQyIDI0LjgwMzkgMjMuMjg2OCAzMC40MDcgMTguODc1NCA0My41OTEyQzE4LjM4MjQgNDUuMDY0NSAxOS44MDgzIDQ2LjM0NDYgMjEuMjk3OCA0NS44ODgxTDQ4Ljg3MiAzNy40MzgxQzQ5LjUzMzEgMzcuMjM1NSA1MC4yMzk5IDM3LjIzNDQgNTAuOTAxNyAzNy40MzQ4TDc4Ljc2MDYgNDUuODcxOFoiCiAgICAgICAgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzM3Ml80MDI1OSkiIC8+CiAgICA8cGF0aAogICAgICAgIGQ9Ik0xOC44MTMyIDQ4LjE3MDdMNDguODkzNSAzOS4wNDcyQzQ5LjU1MDYgMzguODQ3OCA1MC4yNTI0IDM4Ljg0NzMgNTAuOTA5OCAzOS4wNDU2TDgxLjE3ODEgNDguMTc1MkM4My42OTEyIDQ4LjkzMzIgODUuNDExIDUxLjI0ODMgODUuNDExIDUzLjg3MzVWODEuMjIzM0M4NS4yOTQ0IDg3Ljg5OTEgNzkuMjk3NyA5My4yNSA3Mi42MjQ1IDkzLjI1SDYxLjU0MDZDNjAuNDQ0OSA5My4yNSA1OS41NTc3IDkyLjM2MzcgNTkuNTU3NyA5MS4yNjhWODEuNjc4OUM1OS41NTc3IDc3LjkwMzEgNjEuNzkyMSA3NC40ODU1IDY1LjI0OTggNzIuOTcyOUM2OS44ODQ5IDcwLjk0NTQgNzUuMzY4MSA2OC4yMDI4IDc2LjM5OTQgNjIuNjk5MkM3Ni43MzIzIDYwLjkyMjkgNzUuNTc0MSA1OS4yMDk0IDczLjgwMjQgNTguODU3M0M2OS4zMjI2IDU3Ljk2NjcgNjQuMzU2MiA1OC4zMTA3IDYwLjE1NjQgNjAuMTg5M0M1NS4zODg3IDYyLjMyMTkgNTQuMTQxNSA2NS44Njk0IDUzLjY3OTcgNzAuNjMzN0w1My4xMjAxIDc1Ljc2NjJDNTIuOTQ5MSA3Ny4zMzQ5IDUxLjQ3ODUgNzguNTM2NiA0OS45MDE0IDc4LjUzNjZDNDguMjY5OSA3OC41MzY2IDQ3LjA0NjUgNzcuMjk0IDQ2Ljg2OTYgNzUuNjcxMkw0Ni4zMjA0IDcwLjYzMzdDNDUuOTI0OSA2Ni41NTI5IDQ1LjIwNzkgNjIuNTg4NyA0MC45ODk1IDYwLjcwMThDMzYuMTc3NiA1OC41NDk0IDMxLjM0MTkgNTcuODM0NyAyNi4xOTc2IDU4Ljg1NzNDMjQuNDI2IDU5LjIwOTQgMjMuMjY3OCA2MC45MjI5IDIzLjYwMDcgNjIuNjk5MkMyNC42NDEgNjguMjUwNyAzMC4wODEyIDcwLjkzMDUgMzQuNzUwMyA3Mi45NzI5QzM4LjIwOCA3NC40ODU1IDQwLjQ0MjQgNzcuOTAzMSA0MC40NDI0IDgxLjY3ODlWOTEuMjY2M0M0MC40NDI0IDkyLjM2MiAzOS41NTU1IDkzLjI1IDM4LjQ1OTkgOTMuMjVIMjcuMzc1NkMyMC43MDI0IDkzLjI1IDE0LjcwNTcgODcuODk5MSAxNC41ODkxIDgxLjIyMzNWNTMuODY2M0MxNC41ODkxIDUxLjI0NDYgMTYuMzA0NSA0OC45MzE2IDE4LjgxMzIgNDguMTcwN1oiCiAgICAgICAgZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzM3Ml80MDI1OSkiIC8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzcyXzQwMjU5IiB4MT0iNDkuMzA1NyIgeTE9IjIuMDc5IiB4Mj0iODAuMzYyNyIgeTI9IjkzLjY1OTciCiAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIgLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5NjAwIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzM3Ml80MDI1OSIgeDE9IjQ5LjMwNTciIHkxPSIyLjA3OSIgeDI9IjgwLjM2MjciIHkyPSI5My42NTk3IgogICAgICAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNUQ0NUUiIC8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTYwMCIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8zNzJfNDAyNTkiIHgxPSI0OS4zMDU3IiB5MT0iMi4wNzkiIHgyPSI4MC4zNjI3IiB5Mj0iOTMuNjU5NyIKICAgICAgICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjVENDVFIiAvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+",
    downloads: {
      chrome:
        "https://chrome.google.com/webstore/detail/braavos-wallet/jnlgamecbpmbajjfhmmmlhejkemejdma",
      firefox: "https://addons.mozilla.org/en-US/firefox/addon/braavos-wallet",
      edge: "https://microsoftedge.microsoft.com/addons/detail/braavos-wallet/hkkpjehhcnhgefhbdcgfkeegglpjchdc",
    },
  },
  {
    id: "okxwallet",
    name: "OKX Wallet",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB7Zq9jtpAEMfHlhEgQLiioXEkoAGECwoKxMcTRHmC5E3IoyRPkPAEkI7unJYmTgEFTYwA8a3NTKScLnCHN6c9r1e3P2llWQy7M/s1Gv1twCP0ej37dDq9x+Zut1t3t9vZjDEHIiSRSPg4ZpDL5fxkMvn1cDh8m0wmfugfO53OoFQq/crn8wxfY9EymQyrVCqMfHvScZx1p9ls3pFxXBy/bKlUipGPrVbLuQqAfsCliq3zl0H84zwtjQrOw4Mt1W63P5LvBm2d+Xz+YzqdgkqUy+WgWCy+Mc/nc282m4FqLBYL+3g8fjDxenq72WxANZbLJeA13zDX67UDioL5ybXwafMYu64Ltn3bdDweQ5R97fd7GyhBQMipx4POeEDHIu2LfDdBIGGz+hJ9CQ1ABjoA2egAZPM6AgiCAEQhsi/C4jHyPA/6/f5NG3Ks2+3CYDC4aTccDrn6ojG54MnEvG00GoVmWLIRNZ7wTCwDHYBsdACy0QHIhiuRETxlICWpMMhGZHmqS8qH6JLyGegAZKMDkI0uKf8X4SWlaZo+Pp1bRrwlJU8ZKLIvUjKh0WiQ3sRUbNVq9c5Ebew7KEo2m/1p4jJ4qAmDaqDQBzj5XyiAT4VCQezJigAU+IDU+z8vJFnGWeC+bKQV/5VZ71FV6L7PA3gg3tXrdQ+DgLhC+75Wq3no69P3MC0NFQpx2lL04Ql9gHK1bRDjsSBIvScBnDTk1WrlGIZBorIDEYJj+rhdgnQ67VmWRe0zlplXl81vcyEt0rSoYDUAAAAASUVORK5CYII=",
    downloads: {
      chrome:
        "https://chrome.google.com/webstore/detail/mcohilncbfahbmgdjkbpemcciiolgcge",
      firefox: "https://addons.mozilla.org/en-US/firefox/addon/okexwallet",
      edge: "https://microsoftedge.microsoft.com/addons/detail/%E6%AC%A7%E6%98%93-web3-%E9%92%B1%E5%8C%85/pbpjkcldjiffchgbbndmhojiacbgflha",
      safari: "https://apps.apple.com/us/app/okx-wallet/id6463797825",
    },
  },
  {
    id: "metamask",
    name: "MetaMask",
    icon: `data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTIiIGhlaWdodD0iMTg5IiB2aWV3Qm94PSIwIDAgMjEyIDE4OSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cG9seWdvbiBmaWxsPSIjQ0RCREIyIiBwb2ludHM9IjYwLjc1IDE3My4yNSA4OC4zMTMgMTgwLjU2MyA4OC4zMTMgMTcxIDkwLjU2MyAxNjguNzUgMTA2LjMxMyAxNjguNzUgMTA2LjMxMyAxODAgMTA2LjMxMyAxODcuODc1IDg5LjQzOCAxODcuODc1IDY4LjYyNSAxNzguODc1Ii8+PHBvbHlnb24gZmlsbD0iI0NEQkRCMiIgcG9pbnRzPSIxMDUuNzUgMTczLjI1IDEzMi43NSAxODAuNTYzIDEzMi43NSAxNzEgMTM1IDE2OC43NSAxNTAuNzUgMTY4Ljc1IDE1MC43NSAxODAgMTUwLjc1IDE4Ny44NzUgMTMzLjg3NSAxODcuODc1IDExMy4wNjMgMTc4Ljg3NSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjU2LjUgMCkiLz48cG9seWdvbiBmaWxsPSIjMzkzOTM5IiBwb2ludHM9IjkwLjU2MyAxNTIuNDM4IDg4LjMxMyAxNzEgOTEuMTI1IDE2OC43NSAxMjAuMzc1IDE2OC43NSAxMjMuNzUgMTcxIDEyMS41IDE1Mi40MzggMTE3IDE0OS42MjUgOTQuNSAxNTAuMTg4Ii8+PHBvbHlnb24gZmlsbD0iI0Y4OUMzNSIgcG9pbnRzPSI3NS4zNzUgMjcgODguODc1IDU4LjUgOTUuMDYzIDE1MC4xODggMTE3IDE1MC4xODggMTIzLjc1IDU4LjUgMTM2LjEyNSAyNyIvPjxwb2x5Z29uIGZpbGw9IiNGODlEMzUiIHBvaW50cz0iMTYuMzEzIDk2LjE4OCAuNTYzIDE0MS43NSAzOS45MzggMTM5LjUgNjUuMjUgMTM5LjUgNjUuMjUgMTE5LjgxMyA2NC4xMjUgNzkuMzEzIDU4LjUgODMuODEzIi8+PHBvbHlnb24gZmlsbD0iI0Q4N0MzMCIgcG9pbnRzPSI0Ni4xMjUgMTAxLjI1IDkyLjI1IDEwMi4zNzUgODcuMTg4IDEyNiA2NS4yNSAxMjAuMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VBOEQzQSIgcG9pbnRzPSI0Ni4xMjUgMTAxLjgxMyA2NS4yNSAxMTkuODEzIDY1LjI1IDEzNy44MTMiLz48cG9seWdvbiBmaWxsPSIjRjg5RDM1IiBwb2ludHM9IjY1LjI1IDEyMC4zNzUgODcuNzUgMTI2IDk1LjA2MyAxNTAuMTg4IDkwIDE1MyA2NS4yNSAxMzguMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VCOEYzNSIgcG9pbnRzPSI2NS4yNSAxMzguMzc1IDYwLjc1IDE3My4yNSA5MC41NjMgMTUyLjQzOCIvPjxwb2x5Z29uIGZpbGw9IiNFQThFM0EiIHBvaW50cz0iOTIuMjUgMTAyLjM3NSA5NS4wNjMgMTUwLjE4OCA4Ni42MjUgMTI1LjcxOSIvPjxwb2x5Z29uIGZpbGw9IiNEODdDMzAiIHBvaW50cz0iMzkuMzc1IDEzOC45MzggNjUuMjUgMTM4LjM3NSA2MC43NSAxNzMuMjUiLz48cG9seWdvbiBmaWxsPSIjRUI4RjM1IiBwb2ludHM9IjEyLjkzOCAxODguNDM4IDYwLjc1IDE3My4yNSAzOS4zNzUgMTM4LjkzOCAuNTYzIDE0MS43NSIvPjxwb2x5Z29uIGZpbGw9IiNFODgyMUUiIHBvaW50cz0iODguODc1IDU4LjUgNjQuNjg4IDc4Ljc1IDQ2LjEyNSAxMDEuMjUgOTIuMjUgMTAyLjkzOCIvPjxwb2x5Z29uIGZpbGw9IiNERkNFQzMiIHBvaW50cz0iNjAuNzUgMTczLjI1IDkwLjU2MyAxNTIuNDM4IDg4LjMxMyAxNzAuNDM4IDg4LjMxMyAxODAuNTYzIDY4LjA2MyAxNzYuNjI1Ii8+PHBvbHlnb24gZmlsbD0iI0RGQ0VDMyIgcG9pbnRzPSIxMjEuNSAxNzMuMjUgMTUwLjc1IDE1Mi40MzggMTQ4LjUgMTcwLjQzOCAxNDguNSAxODAuNTYzIDEyOC4yNSAxNzYuNjI1IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyNzIuMjUgMCkiLz48cG9seWdvbiBmaWxsPSIjMzkzOTM5IiBwb2ludHM9IjcwLjMxMyAxMTIuNSA2NC4xMjUgMTI1LjQzOCA4Ni4wNjMgMTE5LjgxMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTUwLjE4OCAwKSIvPjxwb2x5Z29uIGZpbGw9IiNFODhGMzUiIHBvaW50cz0iMTIuMzc1IC41NjMgODguODc1IDU4LjUgNzUuOTM4IDI3Ii8+PHBhdGggZmlsbD0iIzhFNUEzMCIgZD0iTTEyLjM3NTAwMDIsMC41NjI1MDAwMDggTDIuMjUwMDAwMDMsMzEuNTAwMDAwNSBMNy44NzUwMDAxMiw2NS4yNTAwMDEgTDMuOTM3NTAwMDYsNjcuNTAwMDAxIEw5LjU2MjUwMDE0LDcyLjU2MjUgTDUuMDYyNTAwMDgsNzYuNTAwMDAxMSBMMTEuMjUsODIuMTI1MDAxMiBMNy4zMTI1MDAxMSw4NS41MDAwMDEzIEwxNi4zMTI1MDAyLDk2Ljc1MDAwMTQgTDU4LjUwMDAwMDksODMuODEyNTAxMiBDNzkuMTI1MDAxMiw2Ny4zMTI1MDA0IDg5LjI1MDAwMTMsNTguODc1MDAwMyA4OC44NzUwMDEzLDU4LjUwMDAwMDkgQzg4LjUwMDAwMTMsNTguMTI1MDAwOSA2My4wMDAwMDA5LDM4LjgxMjUwMDYgMTIuMzc1MDAwMiwwLjU2MjUwMDAwOCBaIi8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjExLjUgMCkiPjxwb2x5Z29uIGZpbGw9IiNGODlEMzUiIHBvaW50cz0iMTYuMzEzIDk2LjE4OCAuNTYzIDE0MS43NSAzOS45MzggMTM5LjUgNjUuMjUgMTM5LjUgNjUuMjUgMTE5LjgxMyA2NC4xMjUgNzkuMzEzIDU4LjUgODMuODEzIi8+PHBvbHlnb24gZmlsbD0iI0Q4N0MzMCIgcG9pbnRzPSI0Ni4xMjUgMTAxLjI1IDkyLjI1IDEwMi4zNzUgODcuMTg4IDEyNiA2NS4yNSAxMjAuMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VBOEQzQSIgcG9pbnRzPSI0Ni4xMjUgMTAxLjgxMyA2NS4yNSAxMTkuODEzIDY1LjI1IDEzNy44MTMiLz48cG9seWdvbiBmaWxsPSIjRjg5RDM1IiBwb2ludHM9IjY1LjI1IDEyMC4zNzUgODcuNzUgMTI2IDk1LjA2MyAxNTAuMTg4IDkwIDE1MyA2NS4yNSAxMzguMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VCOEYzNSIgcG9pbnRzPSI2NS4yNSAxMzguMzc1IDYwLjc1IDE3My4yNSA5MCAxNTMiLz48cG9seWdvbiBmaWxsPSIjRUE4RTNBIiBwb2ludHM9IjkyLjI1IDEwMi4zNzUgOTUuMDYzIDE1MC4xODggODYuNjI1IDEyNS43MTkiLz48cG9seWdvbiBmaWxsPSIjRDg3QzMwIiBwb2ludHM9IjM5LjM3NSAxMzguOTM4IDY1LjI1IDEzOC4zNzUgNjAuNzUgMTczLjI1Ii8+PHBvbHlnb24gZmlsbD0iI0VCOEYzNSIgcG9pbnRzPSIxMi45MzggMTg4LjQzOCA2MC43NSAxNzMuMjUgMzkuMzc1IDEzOC45MzggLjU2MyAxNDEuNzUiLz48cG9seWdvbiBmaWxsPSIjRTg4MjFFIiBwb2ludHM9Ijg4Ljg3NSA1OC41IDY0LjY4OCA3OC43NSA0Ni4xMjUgMTAxLjI1IDkyLjI1IDEwMi45MzgiLz48cG9seWdvbiBmaWxsPSIjMzkzOTM5IiBwb2ludHM9IjcwLjMxMyAxMTIuNSA2NC4xMjUgMTI1LjQzOCA4Ni4wNjMgMTE5LjgxMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTUwLjE4OCAwKSIvPjxwb2x5Z29uIGZpbGw9IiNFODhGMzUiIHBvaW50cz0iMTIuMzc1IC41NjMgODguODc1IDU4LjUgNzUuOTM4IDI3Ii8+PHBhdGggZmlsbD0iIzhFNUEzMCIgZD0iTTEyLjM3NTAwMDIsMC41NjI1MDAwMDggTDIuMjUwMDAwMDMsMzEuNTAwMDAwNSBMNy44NzUwMDAxMiw2NS4yNTAwMDEgTDMuOTM3NTAwMDYsNjcuNTAwMDAxIEw5LjU2MjUwMDE0LDcyLjU2MjUgTDUuMDYyNTAwMDgsNzYuNTAwMDAxMSBMMTEuMjUsODIuMTI1MDAxMiBMNy4zMTI1MDAxMSw4NS41MDAwMDEzIEwxNi4zMTI1MDAyLDk2Ljc1MDAwMTQgTDU4LjUwMDAwMDksODMuODEyNTAxMiBDNzkuMTI1MDAxMiw2Ny4zMTI1MDA0IDg5LjI1MDAwMTMsNTguODc1MDAwMyA4OC44NzUwMDEzLDU4LjUwMDAwMDkgQzg4LjUwMDAwMTMsNTguMTI1MDAwOSA2My4wMDAwMDA5LDM4LjgxMjUwMDYgMTIuMzc1MDAwMiwwLjU2MjUwMDAwOCBaIi8+PC9nPjwvZz48L3N2Zz4=`,
    downloads: {
      chrome:
        "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
      firefox: "https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/",
      edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=en-US",
    },
  },
  {
    id: "orbiter-wallet",
    name: "Orbiter Wallet",
    icon: "data:image/jpeg;base64,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",
    downloads: {
      chrome:
        "https://chromewebstore.google.com/detail/orbiter-wallet/bpfednjcocacheoiphclagcfnpkoolcp",
    },
  },
]

export default wallets
