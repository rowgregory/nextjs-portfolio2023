'use client'

import React, { useEffect, useRef } from 'react'
import Player from './classes/Player'
import Platform from './classes/Platform'
import GenericObject from './classes/GenericObject'
import KeyControls from './classes/KeyControls'
import platform from '../../public/images/Platform8.png'
import bg1 from '../../public/images/Background01.png'
import signArrow from '../../public/images/SignArrow.png'

const Plexx2 = () => {
  const canvasRef = useRef(null)
  const gravity = 5

  useEffect(() => {
    let animationFrameId
    const canvas = canvasRef.current
    let ctx = canvas.getContext('2d')

    canvas.width = 1024
    canvas.height = 576

    let genericObjects = []
    let platforms = []

    let scrollOffset = 0

    const keys = {
      right: {
        pressed: false
      },
      left: {
        pressed: false
      }
    }

    let player = new Player(
      { x: 100, y: 100, width: 40, height: 40, gravity },
      ctx,
      canvas
    )

    new KeyControls(player, keys)

    let createImage = (imgSrc, imgWidth, imgHeight) => {
      const image = new Image()
      image.src = imgSrc
      image.width = imgWidth
      image.height = imgHeight
      return image
    }

    let platformImage

    const init = () => {
      platformImage = createImage(platform.src, 500, 100)

      player = new Player(
        { x: 100, y: 100, width: 40, height: 40, gravity },
        ctx,
        canvas
      )

      new KeyControls(player, keys)

      genericObjects = [
        new GenericObject(
          {
            x: 0,
            y: 0,
            image: createImage(bg1.src, 3000, canvas.height)
          },
          ctx
        ),
        new GenericObject(
          {
            x: 300,
            y: 390,
            image: createImage(signArrow.src, 100, 100)
          },
          ctx
        )
      ]

      platforms = [
        new Platform({ x: -10, y: 490, image: platformImage }, ctx),
        new Platform(
          { x: platformImage.width - 35, y: 490, image: platformImage },
          ctx
        ),
        new Platform(
          {
            x: platformImage.width * 2 + 100,
            y: 490,
            image: platformImage
          },
          ctx
        ),
        new Platform(
          {
            x: platformImage.width * 3,
            y: 490,
            image: platformImage
          },
          ctx
        ),
        new Platform(
          {
            x: platformImage.width * 4,
            y: 200,
            image: platformImage
          },
          ctx
        )
      ]

      scrollOffset = 0
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      ctx.fillStyle = '#234'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      genericObjects.forEach((obj) => {
        obj.draw()
      })

      platforms.forEach((platform) => {
        platform.draw()
      })

      if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed
      } else if (
        (keys.left.pressed && player.position.x > 100) ||
        (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
      ) {
        player.velocity.x = -player.speed
      } else {
        player.velocity.x = 0
        // player.velocity.x *= 0.9;

        if (keys.right.pressed) {
          scrollOffset += player.speed
          platforms.forEach((platform) => (platform.position.x -= player.speed))
          genericObjects.forEach(
            (objects) => (objects.position.x -= player.speed * 0.66)
          )
        } else if (keys.left.pressed && scrollOffset > 0) {
          scrollOffset -= player.speed
          platforms.forEach((platform) => (platform.position.x += player.speed))
          genericObjects.forEach(
            (objects) => (objects.position.x += player.speed * 0.66)
          )
        }

        if (scrollOffset > 2000) {
          console.log('YOU WIN!')
        }

        if (player.position.y > canvas.height) {
          console.log('You lose')

          init()
        }
      }

      platforms.forEach((platform) => {
        if (
          player.position.y + player.height <= platform.position.y &&
          player.position.y + player.height + player.velocity.y >=
            platform.position.y &&
          player.position.x <= platform.position.x + platform.width &&
          player.position.x + player.width >= platform.position.x
        ) {
          player.velocity.y = 0
          player.canJump = true
        }
      })

      player.update()
    }

    init()
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef}>Plexx2</canvas>
}

export default Plexx2
