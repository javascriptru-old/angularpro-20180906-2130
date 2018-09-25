# Redux

- state
- reducer
- Store
- dispatch

- middleware


Store {
  private state

  private reducer(state, action) {
    switch(action){
      return state.clone()
    }
  }

  dispatch(action) {
    return reducer(this.state, action)
  }
}

action { type , payload }


# Ngrx (Redux + rxjs)
