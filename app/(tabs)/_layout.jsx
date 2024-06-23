import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
      <Tabs>
        <Tabs.Screen name='index' options={{
          headerTitle: 'Home',
          title: "Home"
        }} />
        <Tabs.Screen name='wallet' options={{
          headerTitle: 'Wallet',
          title: "Wallet",
        }} />
        <Tabs.Screen name='cart' options={{
          headerTitle: 'Cart',
          title: "Cart"
        }} />
        <Tabs.Screen name='support' options={{
          headerTitle: 'Support',
          title: "Support"
        }} />
      </Tabs>
    )
  }

export default TabsLayout
