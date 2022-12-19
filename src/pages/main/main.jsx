import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import '../main/main.css';

function Example(props)
{
    var items = [
        {
            name: "./imgs/carousel001-min.png",
        },
        {
            name: "./imgs/carousel002-min.png",
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
      <div className='carousel-bg'>
        <Paper>
          <div className='image-carousel'>
            <img src={props.item.name}  className='banner' alt="Banner Carousel" />
          </div>
        </Paper>
      </div>
    )
}

export default Example;