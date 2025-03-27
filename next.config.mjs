/** @type {import('next').NextConfig} */
const baseConfig = {
  output: "export", // 👈 Required for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

function mergeConfig(base, override) {
  if (!override) return base

  for (const key in override) {
    if (
      typeof base[key] === 'object' &&
      base[key] !== null &&
      !Array.isArray(base[key])
    ) {
      base[key] = {
        ...base[key],
        ...override[key],
      }
    } else {
      base[key] = override[key]
    }
  }

  return base
}

const getConfig = async () => {
  let userConfig
  try {
    const mod = await import('./v0-user-next.config.mjs')
    userConfig = mod.default || mod
  } catch (e) {
    // ignore error
  }

  return mergeConfig(baseConfig, userConfig)
}

export default getConfig()
