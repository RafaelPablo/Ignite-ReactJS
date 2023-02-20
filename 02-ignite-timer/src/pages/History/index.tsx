import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>History taks</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Stat</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Conclude</td>
            </tr>
            <tr>
              <td>Test</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Conclude</td>
            </tr>
            <tr>
              <td>Test</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Conclude</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
