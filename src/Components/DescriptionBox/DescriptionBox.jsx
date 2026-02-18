import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
   <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rem eveniet porro dicta ducimus quidem laboriosam assumenda quia qui! Ipsam rerum porro laudantium cum! Aliquid sapiente laboriosam necessitatibus voluptates quibusdam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptate nulla, aut et rem quibusdam doloremque voluptas voluptatem facere quisquam suscipit.</p>
        </div>
    </div>
  )
}
