import styled from 'styled-components'
import Layout from '../components/common/Layout'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return (
    <Layout title="JSlancer">
      <Title>Jslancer Page</Title>
    </Layout>
  )
}
