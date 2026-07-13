const SingleItem = ({ item, editItem ,removeItem}) => {
    return (
        <div className="single-item">
            <input type="checkbox" checked={item.completed} onChange={() => editItem(item.key)} />
            <p
                style={{
                    textTransform: 'capitalize',
                    textDecoration: item.completed && 'line-through',
                }}
            >
                {item.value}
            </p>
            <button
                className='btn remove-btn'
                type='button'
                onClick={() => removeItem(item.key)}
            >
                delete
            </button>
        </div>



    )
}
export default SingleItem

