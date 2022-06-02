const client = require('contentful').createClient({
  space: 'woryv1i4hj5q',
  accessToken: 'pQhHo4gLI36m2M5OZ6MXeqa6Y7HR5SPfSB56R4La2jo',
})

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
