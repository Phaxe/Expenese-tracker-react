



export const EditTransaction = () => {




  return (
    <div className="edit-container">
      <h3>Update transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  placeholder="edit-trans" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  placeholder="Edit amount" />
        </div>
        <button className="btn-2">Update transaction</button>
      </form>
    </div>
  )
}
