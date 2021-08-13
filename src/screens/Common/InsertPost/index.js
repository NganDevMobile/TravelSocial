import {Block, Button, Header, Text, TextInput} from '@components';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Image, Pressable, ToastAndroid, Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import {width} from '@utils/responsive';
import {routes} from '@navigation/routes';

const InsertPost = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [picture, setPicture] = useState(
    'https://media.vov.vn/sites/default/files/styles/front_large/public/2020-08/3-blackpink-jisoo-dior-elle-korea-july-2020-issue-1-1.jpg',
  );
  const [user_id, setUserId] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  // const chooseFile = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(picture => {
  //     console.log(picture);
  //     console.log(picture.path);
  //     setPicture(picture.path);
  //   });
  // };
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

      // Alert.alert(
      //   'Image uploaded!',
      //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      // );
      return url;
    } catch (e) {
      console.log(e);

      return null;
    }
  };

  // const _uploadImage = async (nameImg, uri) => {
  //   const path = 'images/' + nameImg + '.jpg';
  //   return new Promise(async (res, rej) => {
  //     const response = await fetch(uri);
  //     const file = await response.blob();

  //     let upload = storage().ref(path).putFile(file);

  //     upload.on(
  //       'state_changed',
  //       snapshot => {},
  //       err => {
  //         rej(err);
  //       },
  //       async () => {
  //         const url = await upload.snapshot.ref.getDownloadURL();
  //         res(url);
  //         ToastAndroid.show('Upload success!', ToastAndroid.SHORT);
  //       },
  //     );
  //   });
  // };

  const _insert = async (title, content, picture, user_id) => {
    // const remoteUri = await uploadImage(picture);
    // console.log('Image Url: ', remoteUri);
    const remoteUri = await uploadImage();
    if (title == null || content == null) {
      ToastAndroid.show('Vui lòng nhập đủ!', ToastAndroid.SHORT);
    } else {
      var Data = {
        title: title,
        content: content,
        picture: remoteUri,
        user_id: user_id,
      };

      fetch('http://10.0.2.2:8088/views/post_insert.php', {
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
          ToastAndroid.show('Thành công!', ToastAndroid.SHORT);
        });
      // .catch(error => console.error('>>>>>>>>', error));
    }
  };

  return (
    <Block flex paddingHorizontal={16} backgroundColor={theme.colors.white}>
      <Header canGoBack title="Thêm bài viết" />
      <Block>
        <TextInput
          onChangeText={text => setTitle(text)}
          label="Tiêu đề"
          labelStyle={{fontWeight: 'bold'}}
        />
        <TextInput
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
          onPress={() => _insert(title, content, picture, user_id)}
          title="Đăng"
        />
      </Block>
    </Block>
  );
};

export default InsertPost;
