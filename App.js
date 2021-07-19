import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Segment,
  Grid,
  Divider,
  Header,
  Icon,
  Search,
  Button,
  Placeholder,
  List,
  Table,
  Menu,
  Label,
  Container
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
      <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>OR</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='search' />
            Cari Documents
          </Header>
          <Search placeholder='Search document...' />
        </Grid.Column>
        <Grid.Column>
          <Header icon>
            <Icon name='file pdf' />
            Tambah Document Baru
          </Header>
          <Button primary>Create Document</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  <Grid columns={3} stackable>
    <Grid.Column>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <List>
      <List.Item>
      <h4>Website Terkait</h4>
      </List.Item>
      <List.Item>
     <List.Icon name='linkify' />
     <List.Content>
       <a href='http://www.google.com'>Google</a>
     </List.Content>
   </List.Item>
   <List.Item>
     <List.Icon name='linkify' />
     <List.Content>
       <a href='http://www.facebook.com'>Facebook</a>
     </List.Content>
   </List.Item>
   <List.Item>
     <List.Icon name='linkify' />
     <List.Content>
       <a href='http://www.semantic-ui.com'>Semantic UI</a>
     </List.Content>
   </List.Item>
   <List.Item>
     <List.Icon name='linkify' />
     <List.Content>
       <a href='http://www.niomic.com'>Niomic</a>
     </List.Content>
   </List.Item>
   <List.Item>
     <List.Icon name='linkify' />
     <List.Content>
       <a href='http://www.react.com'>React</a>
     </List.Content>
   </List.Item>
      </List>
    </Grid.Column>
  </Grid>
  <br/>
<Container>

  <Table celled>
  <Table.Header>
  <Table.Row>
  <Table.HeaderCell textAlign="right" colSpan="3">
  <Search placeholder="Search document..."/>
  </Table.HeaderCell>
  </Table.Row>
  </Table.Header>
    <Table.Header>
      <Table.Row textAlign="center">
        <Table.HeaderCell colSpan="2">Nama Document</Table.HeaderCell>
        <Table.HeaderCell>Jenis File</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell positive colSpan="2">
          <Label ribbon>Panduan Belajar Javascript</Label>
        </Table.Cell>
        <Table.Cell textAlign="center">PDF</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell colSpan="2">Panduan Belajar CSS</Table.Cell>
        <Table.Cell textAlign="center">PDF</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell colSpan="2">Panduan Belajar React JS</Table.Cell>
        <Table.Cell textAlign="center">PDF</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  </Container>
  </div>
    );
  }
}


export default App;
