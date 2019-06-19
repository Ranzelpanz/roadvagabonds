import React from "react"
import Tags from '../components/Tags'
import ItemBlog from '../components/ItemBlog'
import theme from '../../config/theme'
import Container from '../elements/Container'
import styled from 'styled-components'

const CategoriesContainer = styled(Container)`
  
  a {
    font-size: 1rem !important;
    padding: 0.25rem 0.85rem !important;
  }
`

const Section = styled.div`
    margin: 1.5rem 0;
`

const BlogBox = styled.div`
    border-radius: ${props => props.theme.borderRadius.default};
    background: ${props => props.theme.colors.main.yellow};
`

const Blog = ({ cats, posts }) => (
    <div>
        <CategoriesContainer>
            <Tags tags={cats.group} linkPrefix="categories" />
        </CategoriesContainer>
        <div style={{
            height: '100%',
            width: '70%',
            background: theme.colors.main.grey,
            display: 'table-cell'
        }}>
            {posts.map(({ node }) => {
                return (
                    <BlogBox
                        key={node.fields.slug}>
                        <Section>
                            <ItemBlog
                                key={node.fields.slug}
                                path={node.frontmatter.slug}
                                cover={node.frontmatter.image.childImageSharp.fluid}
                                title={node.frontmatter.title}
                                date={node.frontmatter.date}
                                category={node.frontmatter.categories}
                                excerpt={node.excerpt}
                            />
                        </Section>
                    </BlogBox>
                )
            })}
        </div>
    </div>

)

export default Blog