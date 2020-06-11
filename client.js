const dqs = document.querySelector.bind(document)
const on = (id, fn) => dqs('#' + id).addEventListener('click', fn)

const ns = {}
window.ns = ns

let viewCounter = 0

on('sp', async () => {
  ns.p = await fin.Platform.start({uuid: 'plat-1'})
})

on('gp', async () => {
  ns.p = await fin.Platform.getCurrent()
})

on('kp', async () => {
  await (await fin.Application.wrap({uuid: 'plat-1'})).close()
})

on('qp', async () => {
  await ns.p.quit()
})

on('cepw', async () => {
  let w = await p.createWindow({})
})

on('cpwl', async () => {
  const r = await ns.p.createWindow({
    layout: {
      content: [
        {
          type: 'stack',
          content: [
            {
              type: 'component',
              componentName: 'view',
              componentState: {
                name: 'test_view_' + ++viewCounter,
                url: 'http://localhost:3000'
              }
            },
            {
              type: 'component',
              componentName: 'view',
              componentState: {
                name: 'test_view_' + ++viewCounter,
                url: 'https://cdn.openfin.co/docs/javascript/canary/Platform.html'
              }
            }
          ]
        }
      ]
    }
  })

  console.log(r)
})
