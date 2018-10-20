function Settings(props) {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Change Clock Number Color</Text>}>
          <ColorSelect
            settingsKey="clockNumberColor"
            colors={[
              {color: 'white'},
              {color: 'tomato'},
              {color: 'sandybrown'},
              {color: 'gold'},
              {color: 'aquamarine'},
              {color: 'chartreuse'},
              {color: 'deepskyblue'},
              {color: 'plum'},
              {color: 'deeppink'}
            ]}
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(Settings);