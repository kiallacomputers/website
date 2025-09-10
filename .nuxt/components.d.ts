
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'LandingButton': typeof import("../components/landing/Button.vue")['default']
    'LandingContactform': typeof import("../components/landing/Contactform.vue")['default']
    'LandingContainer': typeof import("../components/landing/Container.vue")['default']
    'LandingCsContactForm': typeof import("../components/landing/CsContactForm.vue")['default']
    'LandingCsc': typeof import("../components/landing/Csc.vue")['default']
    'LandingCta': typeof import("../components/landing/Cta.vue")['default']
    'LandingDrContactForm': typeof import("../components/landing/DrContactForm.vue")['default']
    'LandingDrc': typeof import("../components/landing/Drc.vue")['default']
    'LandingFeatures': typeof import("../components/landing/Features.vue")['default']
    'LandingFooter': typeof import("../components/landing/Footer.vue")['default']
    'LandingHero': typeof import("../components/landing/Hero.vue")['default']
    'LandingLink': typeof import("../components/landing/Link.vue")['default']
    'LandingLogos': typeof import("../components/landing/Logos.vue")['default']
    'LandingNavbar': typeof import("../components/landing/Navbar.vue")['default']
    'LandingPricing': typeof import("../components/landing/Pricing.vue")['default']
    'LandingSectionhead': typeof import("../components/landing/Sectionhead.vue")['default']
    'LandingTick': typeof import("../components/landing/Tick.vue")['default']
    'LandingVcContactForm': typeof import("../components/landing/VcContactForm.vue")['default']
    'LandingVcc': typeof import("../components/landing/Vcc.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'Icon': typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
    'IconCSS': typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyLandingButton': LazyComponent<typeof import("../components/landing/Button.vue")['default']>
    'LazyLandingContactform': LazyComponent<typeof import("../components/landing/Contactform.vue")['default']>
    'LazyLandingContainer': LazyComponent<typeof import("../components/landing/Container.vue")['default']>
    'LazyLandingCsContactForm': LazyComponent<typeof import("../components/landing/CsContactForm.vue")['default']>
    'LazyLandingCsc': LazyComponent<typeof import("../components/landing/Csc.vue")['default']>
    'LazyLandingCta': LazyComponent<typeof import("../components/landing/Cta.vue")['default']>
    'LazyLandingDrContactForm': LazyComponent<typeof import("../components/landing/DrContactForm.vue")['default']>
    'LazyLandingDrc': LazyComponent<typeof import("../components/landing/Drc.vue")['default']>
    'LazyLandingFeatures': LazyComponent<typeof import("../components/landing/Features.vue")['default']>
    'LazyLandingFooter': LazyComponent<typeof import("../components/landing/Footer.vue")['default']>
    'LazyLandingHero': LazyComponent<typeof import("../components/landing/Hero.vue")['default']>
    'LazyLandingLink': LazyComponent<typeof import("../components/landing/Link.vue")['default']>
    'LazyLandingLogos': LazyComponent<typeof import("../components/landing/Logos.vue")['default']>
    'LazyLandingNavbar': LazyComponent<typeof import("../components/landing/Navbar.vue")['default']>
    'LazyLandingPricing': LazyComponent<typeof import("../components/landing/Pricing.vue")['default']>
    'LazyLandingSectionhead': LazyComponent<typeof import("../components/landing/Sectionhead.vue")['default']>
    'LazyLandingTick': LazyComponent<typeof import("../components/landing/Tick.vue")['default']>
    'LazyLandingVcContactForm': LazyComponent<typeof import("../components/landing/VcContactForm.vue")['default']>
    'LazyLandingVcc': LazyComponent<typeof import("../components/landing/Vcc.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']>
    'LazyIconCSS': LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const LandingButton: typeof import("../components/landing/Button.vue")['default']
export const LandingContactform: typeof import("../components/landing/Contactform.vue")['default']
export const LandingContainer: typeof import("../components/landing/Container.vue")['default']
export const LandingCsContactForm: typeof import("../components/landing/CsContactForm.vue")['default']
export const LandingCsc: typeof import("../components/landing/Csc.vue")['default']
export const LandingCta: typeof import("../components/landing/Cta.vue")['default']
export const LandingDrContactForm: typeof import("../components/landing/DrContactForm.vue")['default']
export const LandingDrc: typeof import("../components/landing/Drc.vue")['default']
export const LandingFeatures: typeof import("../components/landing/Features.vue")['default']
export const LandingFooter: typeof import("../components/landing/Footer.vue")['default']
export const LandingHero: typeof import("../components/landing/Hero.vue")['default']
export const LandingLink: typeof import("../components/landing/Link.vue")['default']
export const LandingLogos: typeof import("../components/landing/Logos.vue")['default']
export const LandingNavbar: typeof import("../components/landing/Navbar.vue")['default']
export const LandingPricing: typeof import("../components/landing/Pricing.vue")['default']
export const LandingSectionhead: typeof import("../components/landing/Sectionhead.vue")['default']
export const LandingTick: typeof import("../components/landing/Tick.vue")['default']
export const LandingVcContactForm: typeof import("../components/landing/VcContactForm.vue")['default']
export const LandingVcc: typeof import("../components/landing/Vcc.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Icon: typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
export const IconCSS: typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyLandingButton: LazyComponent<typeof import("../components/landing/Button.vue")['default']>
export const LazyLandingContactform: LazyComponent<typeof import("../components/landing/Contactform.vue")['default']>
export const LazyLandingContainer: LazyComponent<typeof import("../components/landing/Container.vue")['default']>
export const LazyLandingCsContactForm: LazyComponent<typeof import("../components/landing/CsContactForm.vue")['default']>
export const LazyLandingCsc: LazyComponent<typeof import("../components/landing/Csc.vue")['default']>
export const LazyLandingCta: LazyComponent<typeof import("../components/landing/Cta.vue")['default']>
export const LazyLandingDrContactForm: LazyComponent<typeof import("../components/landing/DrContactForm.vue")['default']>
export const LazyLandingDrc: LazyComponent<typeof import("../components/landing/Drc.vue")['default']>
export const LazyLandingFeatures: LazyComponent<typeof import("../components/landing/Features.vue")['default']>
export const LazyLandingFooter: LazyComponent<typeof import("../components/landing/Footer.vue")['default']>
export const LazyLandingHero: LazyComponent<typeof import("../components/landing/Hero.vue")['default']>
export const LazyLandingLink: LazyComponent<typeof import("../components/landing/Link.vue")['default']>
export const LazyLandingLogos: LazyComponent<typeof import("../components/landing/Logos.vue")['default']>
export const LazyLandingNavbar: LazyComponent<typeof import("../components/landing/Navbar.vue")['default']>
export const LazyLandingPricing: LazyComponent<typeof import("../components/landing/Pricing.vue")['default']>
export const LazyLandingSectionhead: LazyComponent<typeof import("../components/landing/Sectionhead.vue")['default']>
export const LazyLandingTick: LazyComponent<typeof import("../components/landing/Tick.vue")['default']>
export const LazyLandingVcContactForm: LazyComponent<typeof import("../components/landing/VcContactForm.vue")['default']>
export const LazyLandingVcc: LazyComponent<typeof import("../components/landing/Vcc.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']>
export const LazyIconCSS: LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
