export default function SortBar({ order, setOrder, topicSort, setTopicSort }) {
  console.log(topicSort);
  return (
    <>
      <select
        id="topic-dropdown"
        onChange={(e) => {
          setTopicSort(e.target.value);
        }}
        value={topicSort}
      >
        <option value="date">Date</option>
        <option value="comments">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <select id="order-dropdown">
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </>
  );
}
