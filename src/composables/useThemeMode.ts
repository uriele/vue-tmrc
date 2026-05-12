import { computed } from 'vue'
import { useColorMode } from '@vueuse/core'

export const themeModes = ['dark', 'light', 'auto'] as const

export type ThemeMode = (typeof themeModes)[number]
export type ResolvedThemeMode = Exclude<ThemeMode, 'auto'>

type ThemeModeState = ReturnType<typeof createThemeMode>

let themeModeState: ThemeModeState | undefined

function createThemeMode() {
  const mode = useColorMode<ResolvedThemeMode>({
    emitAuto: true,
    selector: 'html',
    attribute: 'data-bs-theme',
  })

  const selectedMode = computed<ThemeMode>({
    get: () => mode.value as ThemeMode,
    set: (value) => {
      mode.value = value
    },
  })

  const resolvedMode = computed<ResolvedThemeMode>(() => mode.state.value as ResolvedThemeMode)

  const legacyMode = mode.store.value as string
  if (legacyMode === 'cafe') {
    mode.store.value = 'light'
  } else if (legacyMode === 'contrast') {
    mode.store.value = 'dark'
  }

  const isLight = computed(() => resolvedMode.value === 'light')
  const isDark = computed(() => resolvedMode.value === 'dark')
  const bootstrapTheme = computed(() => resolvedMode.value)

  const nextMode = () => {
    const currentIndex = themeModes.indexOf(selectedMode.value)
    const nextIndex = (currentIndex + 1) % themeModes.length
    selectedMode.value = themeModes[nextIndex] as ThemeMode
  }

  return {
    mode,
    selectedMode,
    resolvedMode,
    bootstrapTheme,
    systemMode: mode.system,
    isLight,
    isDark,
    nextMode,
  }
}

export function useThemeMode() {
  themeModeState ??= createThemeMode()
  return themeModeState
}
