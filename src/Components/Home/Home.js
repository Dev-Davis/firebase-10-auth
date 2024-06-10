import React from 'react'

const Home = () => {
  return (
    <div>
      <section className="home-header text-center">
        <h1 className="home-title">Skate Off</h1>
        <p className="home-subtitle">
          A place where skaters connect
        </p>
      </section>
      <hr />
      <section className="search-input col-10 offset-1">
        <section className="search-tite  text-center">
        <p className="search-text">Find your favorite hat:</p>
        </section>
        <section className="home-search">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search....."
              aria-label="Search"
            />
            <button class="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </section>
      </section>
      <hr />
      <section>
        
      </section>
    </div>
  )
}

export default Home