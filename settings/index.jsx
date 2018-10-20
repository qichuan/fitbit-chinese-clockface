function Settings(props) {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Change Clock Number Color</Text>}>
          <ColorSelect
            settingsKey="clockNumberColor"
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