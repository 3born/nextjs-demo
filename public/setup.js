adk.cmd.push(() => {
    const { publisherId } = window.advisible

    adk.config()
        .addContainer('my-container', adk.container.config()
            .provider('adk.hello'))
        .addContainer('lazy-container', adk.container.config()
            .provider('adk.hello')
            .lazy())
        .apply()
        .init(publisherId)
})

// adk.cmd.push(() => {
//     const { publisherId, resourceRoot } = window.advisible

//     adk.config()
//         .addTemplate('com.advisible.native.teaser', adk.template.config()
//             .url(resourceRoot + '/teaser.html?v=1'))
//         .addTemplate('com.advisible.native.article', adk.template.config()
//             .url(resourceRoot + '/article.html?v=1'))
//         .addTemplate('native-teaser-related', adk.template.config()
//             .url(resourceRoot + '/teaser-related.html?v=2'))

//         .addContainer('native-teaser', adk.container.config()
//             .provider('adk.placement')
//             //.lazy()
//             .params({
//                 adapters: {
//                     'com.advisible.content-display': {
//                         target: '_blank',
//                         render: 'com.advisible.native.teaser',
//                         templateValues: {
//                             external: true,
//                         }
//                     },
//                 },
//             }))
            
//         .addContainer('native-scroll', adk.container.config()
//             .provider('adk.placement')
//             //.lazy()
//             .fullWidth()
//             .params({
//                 adapters: {
//                     'com.advisible.native.article': {
//                         afterLoad: ({ err, item, elem }) => {
//                             if (!err && item) {
//                                 document.querySelector('.native-wrapper').classList.add('native-wrapper--padded')
//                                 adk.container.attach(elem)
//                             }
//                         },
//                     },
//                 },
//             }))
            
//         .addContainer('native-article', adk.container.config()
//             .provider('adk.native.article')
//             .maxWidth(1000)
//             .params({
//                 itemId: window.location.hash.slice(4),
//                 imageAspectRatio: 2,
//                 imageAspectRatioStrict: true,
//                 maxRelatedTeasers: 2,
//                 relatedTeaserTemplate: 'native-teaser-related',
//                 afterLoad: ({ err, item, elem }) => {
//                     if (!err && item) {
//                         adk.container.attach(elem)
//                         item && (window.document.title = item.headline)
//                     }
//                 },
//             }))
        
//         .addContainer('native-marking', adk.container.config()
//             .fullWidth()
//             .sticky()
//             .stickyZIndex(1)
//             .provider(({ elem, params }) => {
//                 elem.innerHTML = `<div class="native-article__marking">ANNONS FRÅN ${params.advertiser}</div>`
//             }))

//         .apply()
//         .init(publisherId)

//     const handleReady = () => {
//         adk.container.attach()
//     }

//     document.readyState === 'loading' ?
//         document.addEventListener('DOMContentLoaded', handleReady) :
//         handleReady()
// })