import {Block, Button, Header, Text, TextInput} from '@components';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Image, Pressable, ToastAndroid, Platform, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import {width} from '@utils/responsive';
import {routes} from '@navigation/routes';

const UpdatePost = ({route}) => {
  const {item: post} = route.params;

  const navigation = useNavigation();

  const [id, setId] = useState(post.id);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [picture, setPicture] = useState(post.picture);
  const [user_id, setUserId] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then(image => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setPicture(imageUri);
    });
  };

  const uploadImage = async () => {
    if (picture == null) {
      return null;
    }
    const uploadUri = picture;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);
    // Set transferred state
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setPicture(null);
      console.log(url);

      return url;
    } catch (e) {
      console.log(e);

      return null;
    }
  };

  const _update = async (id, title, content, picture, user_id) => {
    // const remoteUri = await uploadImage(picture);
    // console.log('Image Url: ', remoteUri);
    const remoteUri = await uploadImage();
    if (title == null || content == null) {
      ToastAndroid.show('Vui lòng nhập đủ!', ToastAndroid.SHORT);
    } else {
      var Data = {
        id: id,
        title: title,
        content: content,
        picture: remoteUri,
        user_id: user_id,
      };

      fetch('http://10.0.2.2:8088/views/post_update.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
      })
        .then(response => response.json())
        .then(response => {
          console.log('response: ');
          console.log(response);
          navigation.navigate(routes.BOTTOM_TAB);
          ToastAndroid.show('Updated!', ToastAndroid.SHORT);
        });
      // .catch(error => console.error('>>>>>>>>', error));
    }
  };

  const _del = async id => {
    var Data = {
      id: id,
    };
    fetch('http://10.0.2.2:8088/views/post_delete.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Data),
    })
      .then(response => response.json())
      .then(response => {
        console.log('response: ');
        console.log(response);
        navigation.navigate(routes.BOTTOM_TAB);
        console.log('Deleted!');
        ToastAndroid.show('Deleted!', ToastAndroid.SHORT);
      });
    // .catch(error => console.error('>>>>>>>>', error));
  };

  const _delete = () =>
    Alert.alert('DELETE', 'Do you want to delete this item?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => _del(id)},
    ]);
  return (
    <Block flex paddingHorizontal={16} backgroundColor={theme.colors.white}>
      <Header canGoBack title="Chỉnh sửa bài viết" />
      <Block>
        <TextInput
          value={title}
          onChangeText={text => setTitle(text)}
          label="Tiêu đề"
          labelStyle={{fontWeight: 'bold'}}
        />
        <TextInput
          value={content}
          onChangeText={text => setContent(text)}
          label="Nội dung"
          labelStyle={{fontWeight: 'bold'}}
          containerInputStyle={{marginTop: 20}}
        />
        <Block marginVertical={15}>
          <Image
            width={width}
            height={300}
            style={styles.image}
            source={{uri: picture}}
          />
          <Pressable onPress={() => choosePhotoFromLibrary()}>
            <Text fontType="bold">Chọn ảnh</Text>
          </Pressable>
        </Block>
        <Button
          onPress={() => _update(id, title, content, picture, user_id)}
          title="Lưu"
        />
        <Button
          containerStyle={{backgroundColor: theme.colors.red}}
          onPress={() => _delete(id)}
          title="Xóa bài viết"
        />
      </Block>
    </Block>
  );
};

export default UpdatePost;
