import React from 'react';
import { Screen, ScreenBody, ScreenHeader } from '../../components/showcase-screen-layout';
import Stylers from '../../stylo/stylers';
import Stylish from '../../stylo/stylish';

const Form1 = () => {
  const [placeholderTextColor] = Stylers.useVariables(['Color.Grey3']);
  return (
    <Stylish.View
      styleNames={[
        'Form',
        'Padding',
        'Border',
        'Border.Radius',
        'BackgroundColor.Alpha10',
        'Margin.Bottom.Large',
      ]}>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Form.Item.Label']}>
          <Stylish.View styleNames={['Form.Item.Label.Left']}>
            <Stylish.Icon.AntDesign
              name="user"
              styleNames={['Color.Secondary']}
            />
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Label.Body']}>
            <Stylish.Text>Name</Stylish.Text>
          </Stylish.View>
          <Stylish.TouchableOpacity styleNames={['Form.Item.Label.Right']}>
            <Stylish.Icon.AntDesign
              name="questioncircleo"
              styleNames={['Color.Secondary']}
            />
          </Stylish.TouchableOpacity>
        </Stylish.View>
        <Stylish.View styleNames={['Form.Item.Input']}>
          <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="Full name" />
        </Stylish.View>
      </Stylish.View>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Form.Item.Label']}>
          <Stylish.View styleNames={['Form.Item.Label.Left']}>
            <Stylish.Icon.AntDesign
              name="calendar"
              styleNames={['Color.Secondary']}
            />
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Label.Body']}>
            <Stylish.Text>Date of birth</Stylish.Text>
          </Stylish.View>
          <Stylish.TouchableOpacity styleNames={['Form.Item.Label.Right']}>
            <Stylish.Icon.AntDesign
              name="questioncircleo"
              styleNames={['Color.Secondary']}
            />
          </Stylish.TouchableOpacity>
        </Stylish.View>
        <Stylish.View styleNames={['Form.Item.Input']}>
          <Stylish.View styleNames={['Form.Item.Input.Body']}>
            <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="10 Mar '84" />
          </Stylish.View>
          <Stylish.TouchableOpacity
            styleNames={['Form.Item.Input.Right', 'Border.Left']}>
            <Stylish.Icon.AntDesign
              name="down"
              styleNames={['Color.Secondary']}
            />
          </Stylish.TouchableOpacity>
        </Stylish.View>
      </Stylish.View>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Form.Item.Label']}>
          <Stylish.View styleNames={['Form.Item.Label.Left']}>
            <Stylish.Icon.SimpleLineIcons
              name="location-pin"
              styleNames={['Color.Secondary']}
            />
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Label.Body']}>
            <Stylish.Text>Address</Stylish.Text>
          </Stylish.View>
          <Stylish.TouchableOpacity styleNames={['Form.Item.Label.Right']}>
            <Stylish.Icon.AntDesign
              name="questioncircleo"
              styleNames={['Color.Secondary']}
            />
          </Stylish.TouchableOpacity>
        </Stylish.View>
        <Stylish.View styleNames={['Form.Item.Input']}>
          <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="Building, street, city, county" />
        </Stylish.View>
      </Stylish.View>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Form.Item.Label']}>
          <Stylish.View styleNames={['Form.Item.Label.Left']}>
            <Stylish.Icon.MaterialIcons
              name="alternate-email"
              styleNames={['Color.Secondary']}
            />
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Label.Body']}>
            <Stylish.Text>Email</Stylish.Text>
          </Stylish.View>
          <Stylish.TouchableOpacity styleNames={['Form.Item.Label.Right']}>
            <Stylish.Icon.AntDesign
              name="questioncircleo"
              styleNames={['Color.Secondary']}
            />
          </Stylish.TouchableOpacity>
        </Stylish.View>
        <Stylish.View styleNames={['Form.Item.Input']}>
          <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="me@domain.com" />
        </Stylish.View>
      </Stylish.View>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Form.Item.Label']}>
          <Stylish.View styleNames={['Form.Item.Label.Left']}>
            <Stylish.Icon.AntDesign
              name="phone"
              styleNames={['Color.Secondary']}
            />
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Label.Body']}>
            <Stylish.Text>Phone</Stylish.Text>
          </Stylish.View>
          <Stylish.TouchableOpacity styleNames={['Form.Item.Label.Right']}>
            <Stylish.Icon.AntDesign
              name="questioncircleo"
              styleNames={['Color.Secondary']}
            />
          </Stylish.TouchableOpacity>
        </Stylish.View>
        <Stylish.View styleNames={['Form.Item.Input']}>
          <Stylish.TouchableOpacity
            styleNames={['Form.Item.Input.Left', 'Border.Right']}>
            <Stylish.Text styleNames={['Color.Secondary', 'Margin.Right.Mini']}>
              + 91
            </Stylish.Text>
            <Stylish.Icon.AntDesign
              name="down"
              styleNames={['Color.Secondary']}
            />
          </Stylish.TouchableOpacity>
          <Stylish.View styleNames={['Form.Item.Input.Body']}>
            <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="98123 98123" />
          </Stylish.View>
        </Stylish.View>
      </Stylish.View>
    </Stylish.View>
  );
};

const Form2 = () => {
  const [placeholderTextColor] = Stylers.useVariables(['Color.Grey3']);
  return (
    <Stylish.View
      styleNames={[
        'Form',
        'Padding',
        'Border',
        'Border.Radius',
        'BackgroundColor.Alpha10',
        'Margin.Bottom.Large',
      ]}>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Flex.Row']}>
          <Stylish.View styleNames={['Form.Item.Label', 'Flex.2']}>
            <Stylish.Text>Name</Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Input', 'Flex.7']}>
            <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="Full name" />
          </Stylish.View>
        </Stylish.View>
      </Stylish.View>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Flex.Row']}>
          <Stylish.View styleNames={['Form.Item.Label', 'Flex.2']}>
            <Stylish.Text>D.O.B.</Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Input', 'Flex.7']}>
            <Stylish.View styleNames={['Form.Item.Input.Body']}>
              <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="10 Mar '84" />
            </Stylish.View>
            <Stylish.TouchableOpacity
              styleNames={['Form.Item.Input.Right', 'Border.Left']}>
              <Stylish.Icon.AntDesign
                name="down"
                styleNames={['Color.Secondary']}
              />
            </Stylish.TouchableOpacity>
          </Stylish.View>
        </Stylish.View>
      </Stylish.View>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Flex.Row']}>
          <Stylish.View styleNames={['Form.Item.Label', 'Flex.2']}>
            <Stylish.Text>Address</Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Input', 'Flex.7']}>
            <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="Building, street, city, county" />
          </Stylish.View>
        </Stylish.View>
      </Stylish.View>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Flex.Row']}>
          <Stylish.View styleNames={['Form.Item.Label', 'Flex.2']}>
            <Stylish.Text>Email</Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Input', 'Flex.7']}>
            <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="me@domain.com" />
          </Stylish.View>
        </Stylish.View>
      </Stylish.View>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Flex.Row']}>
          <Stylish.View styleNames={['Form.Item.Label', 'Flex.2']}>
            <Stylish.Text>Phone</Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Input', 'Flex.7']}>
            <Stylish.TouchableOpacity
              styleNames={['Form.Item.Input.Left', 'Border.Right']}>
              <Stylish.Text styleNames={['Color.Secondary', 'Margin.Right.Mini']}>
                + 91
              </Stylish.Text>
              <Stylish.Icon.AntDesign
                name="down"
                styleNames={['Color.Secondary']}
              />
            </Stylish.TouchableOpacity>
            <Stylish.View styleNames={['Form.Item.Input.Body']}>
              <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="98123 98123" />
            </Stylish.View>
          </Stylish.View>
        </Stylish.View>
      </Stylish.View>
    </Stylish.View>
  );
};

const Form3 = () => {
  const colorDanger2 = Stylers.useVariables(['Color.Danger2']);

  return (
    <Stylish.View
      styleNames={[
        'Form',
        'Padding',
        'Border',
        'Border.Radius',
        'BackgroundColor.Alpha10',
        'Margin.Bottom.Large',
      ]}>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Form.Item.Label']}>
          <Stylish.Text styleNames={['Color.Danger']}>Name</Stylish.Text>
        </Stylish.View>
        <Stylish.View styleNames={['Form.Item.Input', 'Border.Color.Danger']}>
          <Stylish.TextInput
            placeholder="Full name"
            placeholderTextColor={colorDanger2.toString()}
          />
        </Stylish.View>
        <Stylish.View styleNames={['Form.Item.Help']}>
          <Stylish.View styleNames={['Form.Item.Help.Left']}>
            <Stylish.Icon.AntDesign
              name="exclamationcircle"
              styleNames={['Color.Danger']}
            />
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Help.Body']}>
            <Stylish.Text styleNames={['Color.Danger']}>
              Please enter name!
            </Stylish.Text>
          </Stylish.View>
        </Stylish.View>
      </Stylish.View>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Form.Item.Label']}>
          <Stylish.View styleNames={['Form.Item.Label.Left']}>
            <Stylish.Icon.AntDesign
              name="calendar"
              styleNames={['Color.Danger']}
            />
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Label.Body']}>
            <Stylish.Text styleNames={['Color.Danger']}>
              Date of birth
            </Stylish.Text>
          </Stylish.View>
          <Stylish.TouchableOpacity styleNames={['Form.Item.Label.Right']}>
            <Stylish.Icon.AntDesign
              name="questioncircleo"
              styleNames={['Color.Danger']}
            />
          </Stylish.TouchableOpacity>
        </Stylish.View>
        <Stylish.View styleNames={['Form.Item.Input', 'Border.Color.Danger']}>
          <Stylish.View styleNames={['Form.Item.Input.Body']}>
            <Stylish.TextInput
              placeholder="10 Mar '84"
              placeholderTextColor={colorDanger2.toString()}
            />
          </Stylish.View>
          <Stylish.TouchableOpacity
            styleNames={[
              'Form.Item.Input.Right',
              'Border.Left',
              'Border.Color.Danger',
            ]}>
            <Stylish.Icon.AntDesign name="down" styleNames={['Color.Danger']} />
          </Stylish.TouchableOpacity>
        </Stylish.View>
        <Stylish.View styleNames={['Form.Item.Help']}>
          <Stylish.View styleNames={['Form.Item.Help.Body']}>
            <Stylish.Text styleNames={['Color.Danger']}>
              Please select date of birth!
            </Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Help.Right']}>
            <Stylish.Icon.AntDesign
              name="exclamationcircle"
              styleNames={['Color.Danger']}
            />
          </Stylish.View>
        </Stylish.View>
      </Stylish.View>
    </Stylish.View>
  );
};

const Form4 = () => {
  const colorDanger2 = Stylers.useVariables(['Color.Danger2']);

  return (
    <Stylish.View
      styleNames={[
        'Form',
        'Padding',
        'Border',
        'Border.Radius',
        'BackgroundColor.Alpha10',
        'Margin.Bottom.Large',
      ]}>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Flex.Row']}>
          <Stylish.View styleNames={['Form.Item.Label', 'Flex.2']}>
            <Stylish.Text styleNames={['Color.Danger']}>Name</Stylish.Text>
          </Stylish.View>
          <Stylish.View
            styleNames={['Form.Item.Input', 'Flex.7', 'Border.Color.Danger']}>
            <Stylish.TextInput
              placeholder="Full name"
              placeholderTextColor={colorDanger2.toString()}
            />
          </Stylish.View>
        </Stylish.View>
        <Stylish.View styleNames={['Form.Item.Help']}>
          <Stylish.View styleNames={['Form.Item.Help.Left']}>
            <Stylish.Icon.AntDesign
              name="exclamationcircle"
              styleNames={['Color.Danger']}
            />
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Help.Body']}>
            <Stylish.Text styleNames={['Color.Danger']}>
              Please enter name!
            </Stylish.Text>
          </Stylish.View>
        </Stylish.View>
      </Stylish.View>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Flex.Row']}>
          <Stylish.View styleNames={['Form.Item.Label', 'Flex.2']}>
            <Stylish.Text styleNames={['Color.Danger']}>D.O.B</Stylish.Text>
          </Stylish.View>
          <Stylish.View
            styleNames={['Form.Item.Input', 'Border.Color.Danger', 'Flex.7']}>
            <Stylish.View styleNames={['Form.Item.Input.Body']}>
              <Stylish.TextInput
                placeholder="10 Mar '84"
                placeholderTextColor={colorDanger2.toString()}
              />
            </Stylish.View>
            <Stylish.TouchableOpacity
              styleNames={[
                'Form.Item.Input.Right',
                'Border.Left',
                'Border.Color.Danger',
              ]}>
              <Stylish.Icon.AntDesign
                name="down"
                styleNames={['Color.Danger']}
              />
            </Stylish.TouchableOpacity>
          </Stylish.View>
        </Stylish.View>
        <Stylish.View styleNames={['Flex.Row']}>
          <Stylish.View styleNames={['Flex.2']} />
          <Stylish.View styleNames={['Form.Item.Help', 'Flex.7']}>
            <Stylish.View styleNames={['Form.Item.Help.Body']}>
              <Stylish.Text styleNames={['Color.Danger']}>
                Please select date of birth!
              </Stylish.Text>
            </Stylish.View>
            <Stylish.View styleNames={['Form.Item.Help.Right']}>
              <Stylish.Icon.AntDesign
                name="exclamationcircle"
                styleNames={['Color.Danger']}
              />
            </Stylish.View>
          </Stylish.View>
        </Stylish.View>
      </Stylish.View>
    </Stylish.View>
  );
};

const Form5 = () => {
  const [placeholderTextColor] = Stylers.useVariables(['Color.Grey3']);
  return (
    <Stylish.View
      styleNames={[
        'Form',
        'Padding',
        'Border',
        'Border.Radius',
        'BackgroundColor.Alpha10',
        'Margin.Bottom.Large',
      ]}>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Form.Item.Input']}>
          <Stylish.View
            styleNames={[
              'Form.Item.Input.Left',
              'Padding',
              'BackgroundColor.Grey1',
            ]}>
            <Stylish.Icon.AntDesign
              name="user"
              styleNames={['Color.Secondary']}
            />
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Input.Body']}>
            <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="Login Id" />
          </Stylish.View>
        </Stylish.View>
      </Stylish.View>
      <Stylish.View styleNames={['Form.Item']}>
        <Stylish.View styleNames={['Form.Item.Input']}>
          <Stylish.View
            styleNames={[
              'Form.Item.Input.Left',
              'Padding',
              'BackgroundColor.Grey1',
            ]}>
            <Stylish.Icon.AntDesign
              name="lock"
              styleNames={['Color.Secondary']}
            />
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Input.Body']}>
            <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="Password" />
          </Stylish.View>
          <Stylish.TouchableOpacity
            styleNames={['Form.Item.Input.Right', 'Padding']}>
            <Stylish.Icon.AntDesign name="eye" styleNames={['Color.Secondary']} />
          </Stylish.TouchableOpacity>
        </Stylish.View>
      </Stylish.View>
      <Stylish.TouchableOpacity
        styleNames={['Button', 'Border', 'Border.Color.Primary']}>
        <Stylish.Text styleNames={['Color.Primary']}>Login</Stylish.Text>
      </Stylish.TouchableOpacity>
    </Stylish.View>
  );
};

const Form6 = () => {
  const [placeholderTextColor] = Stylers.useVariables(['Color.Grey3']);
  return (
    <Stylish.View
      styleNames={[
        'Border',
        'Border.Radius',
        'BackgroundColor.Alpha10',
        'Margin.Bottom.Large',
      ]}>
      <Stylish.View styleNames={['Form', 'Padding', 'Margin.Bottom']}>
        <Stylish.Text styleNames={['H3']}>Add New Product</Stylish.Text>
        <Stylish.View styleNames={['Form.Item']}>
          <Stylish.View styleNames={['Form.Item.Label']}>
            <Stylish.Text>Product Catalogue Name</Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Input']}>
            <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="Drinks.Bru.CoffeeJar" />
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Help']}>
            <Stylish.View
              styleNames={['Form.Item.Help.Left', 'Padding.Right.Mini']}>
              <Stylish.Icon.AntDesign
                name="infocirlceo"
                styleNames={['Small', 'Color.Secondary']}
              />
            </Stylish.View>
            <Stylish.View styleNames={['Form.Item.Help.Body']}>
              <Stylish.Text styleNames={['Small', 'Color.Secondary']}>
                The catalogue name is used to quickly identify the product
                details, so it should follow a format
                'Category.Brand.ProductName'.
              </Stylish.Text>
            </Stylish.View>
          </Stylish.View>
        </Stylish.View>
        <Stylish.View styleNames={['Form.Item']}>
          <Stylish.View styleNames={['Form.Item.Label']}>
            <Stylish.Text>Price</Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Input']}>
            <Stylish.View styleNames={['Form.Item.Input.Body']}>
              <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="12.05" />
            </Stylish.View>
            <Stylish.View
              styleNames={['Form.Item.Input.Right', 'BackgroundColor.Grey1']}>
              <Stylish.Text> </Stylish.Text>
              <Stylish.Icon.FontAwesome
                name="dollar"
                styleNames={['Color.Secondary']}
              />
            </Stylish.View>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Help']}>
            <Stylish.View
              styleNames={['Form.Item.Help.Left', 'Padding.Right.Mini']}>
              <Stylish.Icon.AntDesign
                name="infocirlceo"
                styleNames={['Small', 'Color.Secondary']}
              />
            </Stylish.View>
            <Stylish.View styleNames={['Form.Item.Help.Body']}>
              <Stylish.Text styleNames={['Small', 'Color.Secondary']}>
                The price should not include any taxes.
              </Stylish.Text>
            </Stylish.View>
          </Stylish.View>
        </Stylish.View>
        <Stylish.View styleNames={['Form.Item']}>
          <Stylish.View styleNames={['Form.Item.Label']}>
            <Stylish.Text>Taxes</Stylish.Text>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Input', 'Margin.Bottom.Mini']}>
            <Stylish.View
              styleNames={[
                'Form.Item.Input.Left',
                'BackgroundColor.Grey1',
                'Flex.1',
              ]}>
              <Stylish.Text styleNames={['Color.Secondary']}>GEN</Stylish.Text>
            </Stylish.View>
            <Stylish.View styleNames={['Form.Item.Input.Body', 'Flex.7']}>
              <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="0.45" />
            </Stylish.View>
            <Stylish.View
              styleNames={['Form.Item.Input.Right', 'BackgroundColor.Grey1']}>
              <Stylish.Text styleNames={['Color.Secondary']}>%</Stylish.Text>
            </Stylish.View>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Input', 'Margin.Bottom.Mini']}>
            <Stylish.View
              styleNames={[
                'Form.Item.Input.Left',
                'BackgroundColor.Grey1',
                'Flex.1',
              ]}>
              <Stylish.Text styleNames={['Color.Secondary']}>VAT</Stylish.Text>
            </Stylish.View>
            <Stylish.View styleNames={['Form.Item.Input.Body', 'Flex.7']}>
              <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="1.08" />
            </Stylish.View>
            <Stylish.View
              styleNames={['Form.Item.Input.Right', 'BackgroundColor.Grey1']}>
              <Stylish.Text styleNames={['Color.Secondary']}>%</Stylish.Text>
            </Stylish.View>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Input']}>
            <Stylish.View
              styleNames={[
                'Form.Item.Input.Left',
                'BackgroundColor.Grey1',
                'Flex.1',
              ]}>
              <Stylish.Text styleNames={['Color.Secondary']}>LLT</Stylish.Text>
            </Stylish.View>
            <Stylish.View styleNames={['Form.Item.Input.Body', 'Flex.7']}>
              <Stylish.TextInput placeholderTextColor={placeholderTextColor.toString()} placeholder="0.71" />
            </Stylish.View>
            <Stylish.View
              styleNames={['Form.Item.Input.Right', 'BackgroundColor.Grey1']}>
              <Stylish.Text styleNames={['Color.Secondary']}>%</Stylish.Text>
            </Stylish.View>
          </Stylish.View>
          <Stylish.View styleNames={['Form.Item.Help']}>
            <Stylish.View
              styleNames={['Form.Item.Help.Left', 'Padding.Right.Mini']}>
              <Stylish.Icon.AntDesign
                name="infocirlceo"
                styleNames={['Small', 'Color.Secondary']}
              />
            </Stylish.View>
            <Stylish.View styleNames={['Form.Item.Help.Body']}>
              <Stylish.Text styleNames={['Small', 'Color.Secondary']}>
                A general guideline of percentage ranges:
              </Stylish.Text>
              <Stylish.Text styleNames={['Small', 'Color.Secondary']}>
                GEN: 0.15 - 0.75 • VAT: 0.93 - 1.27 • LLT: 0.50 - 1.00
              </Stylish.Text>
            </Stylish.View>
          </Stylish.View>
        </Stylish.View>
      </Stylish.View>
      <Stylish.TouchableOpacity
        styleNames={[
          'Padding',
          'Flex.Row',
          'Flex.AlignItems.Center',
          'Flex.JustifyContent.Center',
          'BackgroundColor.Primary',
          'Border.Radius.BottomLeft',
          'Border.Radius.BottomRight',
        ]}
        style={{ margin: 1 }}>
        <Stylish.Text styleNames={['Color.White', 'Button.Text']}>
          Add
        </Stylish.Text>
      </Stylish.TouchableOpacity>
    </Stylish.View>
  );
};

const FormShowCase = () => (
  <Screen>
    <ScreenHeader title="Form" />
    <ScreenBody>
      <React.Fragment>
        <Form1 />
        <Form2 />
        <Form3 />
        <Form4 />
        <Form5 />
        <Form6 />
      </React.Fragment>
    </ScreenBody>
  </Screen>
);

export default FormShowCase;
