import Instance from '@/utils/http'

export async function GetNewProductAPI() {
  await Instance({
    url: 'http://localhost:5194/api/Layout/GetList'
  })
}
