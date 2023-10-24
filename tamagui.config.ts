import { config } from '@tamagui/config/v2'
import { size, space, radius, zIndex } from '@tamagui/themes'
import { createTamagui, createTokens } from 'tamagui' // or '@tamagui/core'

const tokens = createTokens({
  color: {
    primary1: '#fff000',
  },
  size,
  space,
  radius,
  zIndex
})

const appConfig = createTamagui({
  ...config,
  tokens,
  // themes: {
  //   default: {

  //   }
  // }
})

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig { }
}

export default appConfig