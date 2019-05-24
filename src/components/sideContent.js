import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image'

const RightColumn = styled('div')({
    width: '25%',
    paddingLeft: '20px',
    display: 'table-cell',
    background: '#F9A'
})

//todo outsource
const Card = styled('div')({
    backgroundColor: 'white',
    padding: '5px',
    marginTop: '20px',
})

const Container = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '5px',
    gridRowGap: '5px',
})

class sideContent extends React.Component {
    render() {
        let { posts, insta } = this.props;
        return (
            <RightColumn>
                <Card>
                    <h2>About Me</h2>
                    <p>Hey this is me</p>
                </Card>
                <Card>
                    <h3>Popular on the Blog</h3>
                </Card>
                <Card>
                    <h3>            
                        <a
                            style={{
                                boxShadow: `none`,
                                textDecoration: `none`,
                                color: `inherit`,
                            }}
                            href={`https://instagram.com/${insta}`}>Follow us on Instagram
                        </a>
                    </h3>
                    <Container className='grid'>
                        {
                            posts.edges.map((item, i) => {
                                let captionText = item.node.caption ? deleteTags(item.node.caption.text) : "Instagram Post"
                                //Check for missing images
                                return (
                                    item.node.localImage ?
                                        <a href={item.node.link}> <Image fluid={item.node.localImage.childImageSharp.fluid} key={i} caption={captionText} /></a>
                                        : <div></div>
                                )
                            })
                        }
                    </Container>
                </Card>
            </RightColumn>

        );
    }
}

export default sideContent

function deleteTags(text) {
    return text.replace(/^(\s*#\w+\s*)+$/gm, "")
}