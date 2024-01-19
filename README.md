# start

<!-- 0.71 이상 버전부터는 프로젝트 생성시 기본적으로 타입스크립트로 생성됩니다. -->

npx react-native init LearnReactNative --version 0.70

# default

$ cd ios
$ pod install

### iOS 에뮬레이터 실행시 오류

[!] Error installing hermes-engine
[!] /usr/bin/curl -f -L -o /var/folders/49/wlx1swxd7sbgh95cd9c7j6bw0000gn/T/d20240119-18319-1k1keae/file.tgz https://github.com/facebook/react-native/releases/download/v0.70.15/hermes-runtime-darwin-v0.70.15.tar.gz --create-dirs --netrc-optional --retry 2 -A 'CocoaPods/1.11.3 cocoapods-downloader/1.6.3'

% Total % Received % Xferd Average Speed Time Time Time Current
Dload Upload Total Spent Left Speed
0 0 0 0 0 0 0 0 --:--:-- --:--:-- --:--:-- 0
curl: (22) The requested URL returned error: 404

### 해결방안

./ios/Podfile
use_react_native!(
...
:hermes_enabled => false, <!-- 이부분을 false로 변경 이후 pod install시 문제가 없었습니다. -->
)

- react-native 0.70버전부터 Hermes를 기본 엔진으로 AOT ( Ahead-Of-Time ) 컴파일러를 사용하여 앱의 시작 시간이 더 빠르다. 또한 메모리 사용량을 낮춰 JIT 컴파일 같은 부가적인 오버헤드가 없다. ( 빠른 시작, 낮은 메모리 외에도 앱의 크기 또한 줄일 수 있다.)

- andorid에서의 hermes
  ./android/app/build.gradle
  project.ext.react = [
  enableHermes: true, // clean and rebuild if changing
  ]

- iOS에서의 hermes
  ./ios/podfile
  use_react_native!(
  ...
  :hermes_enabled => true,
  ...
  )

현재 이 부분에서 오류가 나서 false로 바꿔줌.. ( 에러인 사람은 많은 시원한 답변이 없는게 아쉬움.. )

- Javascript로 만들어보기 위해 0.70버전을 선택했는데 이전에 0.73버전으로 만들었을때는 hermes부분이 없었다.. 그래서 일단 false로 변경하고 넘어가기로 함.

# 시작하기

- 기본 태그

* SafeAreaView : iPhone X이상 기종에서 디스플레이의 보이지 않는 영역 및 최하단 영역에 내용이 보여지는 것을 방지
* View : 가장 기본적인 컴포넌트로 레이아웃 및 스타일 담당
* Text : 텍스트를 보여주는 역할

## defaultProps

컴포넌트에 Props를 지정하지 않았을 때 사용할 기본값을 설정해주고 싶을때 사용.
const Greeting = (props) => {
return(
<View>
<Text>{props.name}</Text>
</View>
);
}

Greeting.defaultProps = {
name: "React Native",
};

## CSS

Javascript에서 StyleSheet를 사용
const styles = StyleSheet.create({
container: {
backgroundColor: "red"
},
})

- 특징

* 셀렉터 개념이 없음
* camelCase 작성
* background (X) => backgroundColor (O)
* display 기본속성 flex. ( none | flex 밖에 없음 )
* flexDirection속성의 기본값 column
* 단위가 px, rem, em 등은 없고 dp만 존재
* border : borderWidth, borderStyle, borderColor 등 따로 설정
