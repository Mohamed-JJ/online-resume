import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import pdf from "@/public/resume"
const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4'
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	}
});

const MyDocument = () => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View  style={styles.section} >
				<Text >{pdf}</Text>
			</View>
		</Page>
	</Document>
);

export default MyDocument;