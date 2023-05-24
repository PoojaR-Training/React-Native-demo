import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import DropDownPicker from 'react-native-dropdown-picker';

const OwnerDetails = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Home', value: 'home'}, 
    {label: 'Apartment', value: 'apartment'},
    { label: 'Villa', value: 'villa'},
    {label: 'PG/Hostel', value: 'pg/hostel'},
    
  ]);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
 const onNext = () => {
  console.log("next");
 };
  return (
   
        <ScrollView>
          <View>
          <Text style={style.txt}>Owner Details</Text>
            <Controller
              control={control}
              rules={{
                required: 'Name is required',
                pattern: {
                  value: /^[A-Z]+$/i,
                  message: 'Invalid Name',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Enter Name of Owner"
                  name="ownername"
                  style={style.container}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  
                />
              )}
              name="ownername"
            />
            {errors.ownername && (
              <Text style={style.error}>{errors.ownername.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: 'Conatct number is required',
                maxLength: 10,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Enter Contact number of Owner"
                  name="contact"
                  style={style.container}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )}
              name="contact"
            />
              {errors.contact && (
              <Text style={style.error}>{errors.contact.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Enter Email of Owner"
                  name="price"
                  style={style.container}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                 
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={style.error}>{errors.email.message}</Text>
            )}

 
          <TouchableOpacity onPress={handleSubmit(onNext)} style={style.btn}>
            <Text style={style.btntxt}>Submit</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    flexDirection: 'row',
    padding: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  container: {
    width: '90%',
    height: 60,
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    padding:5,
    marginLeft:20,
    marginRight:20,
    marginBottom:10,
    marginTop:10,
    color:'black',
    
  },
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    color: '#042675',
  },
  btntxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn:{
    backgroundColor: '#3b72f3',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '90%',
    borderRadius: 5,
    padding: 5,
    margin :20
  
  },
  error: {
    color:'red',
    marginLeft: 20,

  },
});
export default OwnerDetails;
