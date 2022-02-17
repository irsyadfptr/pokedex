import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({input}) {

  return (
    <header>
        <form>
          <input
            type='text'
            onChange={input}
            placeholder='Search'
          />
        </form>
    </header>
  )
}

export default Header