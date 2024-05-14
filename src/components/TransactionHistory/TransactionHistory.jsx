import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table>
      <thead className={css.table}>
        <tr>
          <th className={css.text}>Type</th>
          <th className={css.text}>Amount</th>
          <th className={css.text}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
            <tr key={item.key}>
              <td className={css.tableText}>{item.type}</td>
              <td className={css.tableText}>{item.amount}</td>
              <td className={css.tableText}>{item.currency}</td>
            </tr>
          
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
