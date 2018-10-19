function Settings(props) {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Change Color</Text>}>
          <ColorSelect
            settingsKey="color"
            colors={[
              {color: 'tomato'},
              {color: 'sandybrown'},
              {color: 'gold'},
              {color: 'aquamarine'},
              {color: 'deepskyblue'},
              {color: 'plum'}
            ]}
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(Settings);