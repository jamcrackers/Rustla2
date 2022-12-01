import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ServiceSelect from './ServiceSelect';

const HeaderForm = ({ history }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const service = event.currentTarget.elements.service.value;
    const channel = event.currentTarget.elements.channel.value;
    if (channel && channel.length) {
      history.push(`/${service}/${channel}`);
    }
  };

  return (
    <Form
      className='ml-3 mr-3'
      inline
      role='search'
      onSubmit={handleSubmit}
    >
      <ServiceSelect
        style={{
          marginRight: -1,
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
        }}
        />
      <InputGroup>
        <input
          className='form-control'
          placeholder='Stream/Video ID'
          type='text'
          name='channel'
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-default'>Go</button>
        </span>
      </InputGroup>
    </Form>
  );
};

export default HeaderForm;
