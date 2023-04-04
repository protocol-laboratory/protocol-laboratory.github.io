import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Protocol laboratory</span>,
  project: {
    link: 'https://github.com/protocol-laboratory/protocol-laboratory.github.io',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/protocol-laboratory/protocol-laboratory.github.io',
  head: (
      <>
      </>
  ),
  footer: {
    text: 'Protocol laboratory',
  },
}

export default config
