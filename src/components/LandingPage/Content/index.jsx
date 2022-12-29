import { CaretRightOutlined, Collapse } from 'components/AntDesign';
import { FAQ } from 'shared/objects/FAQ';

function Content() {
  const { Panel } = Collapse;
  const expandIcon = ({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />;

  return (
    <section className="sec-5">
      <div className="container1">
        <h1 id="sec-5-h1">Frequently Asked Questions</h1>
        <Collapse
          accordion
          bordered={false}
          expandIcon={expandIcon}
          className="site-collapse-custom-collapse"
        >
          {FAQ.map((question) => (
            <Panel className="site-collapse-custom-panel" header={question.question} key={question.key}>
              <p className="answer">{question.answer}</p>
            </Panel>
          ))}

        </Collapse>
      </div>
    </section>
  );
}

export default Content;
