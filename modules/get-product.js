const datoCMS = require('@datocms/cma-client-browser');
const client = datoCMS.buildClient( {apiToken: 'e16fc5dad5efc05d18c48a26a709ac' })

async function getUploadID(file) {
  return client.uploads.createFromFileOrBlob({
    fileOrBlob: file,
    filename: '',
    author: 'Matheus P.'
  })
}

module.exports = async function ({nome, category, price, description, file}) {
  const uploadId = await getUploadID(file)
  const record = await client.items.create({
    item_type: { type: 'item_type', id: '40166' },
    name: nome,
    category:  category,
    price: price,
    description: description,
    image: {
      upload_id: uploadId.id
    }
  })
  console.log(record)
}